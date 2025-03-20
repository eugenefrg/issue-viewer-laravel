<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class IssueController extends Controller
{
    public function show(string $owner, string $repo, string $id)
    {
        return Inertia::render('Issue/View', [
            'issue' => $this->fetchIssue($owner, $repo, $id),
        ]);
    }

    public function list()
    {
        return Inertia::render('Issue/List', [
            'issues' => $this->fetchIssues(),
        ]);
    }

    /**
     * Fetch issues from GitHub API. 
     * 
     * @param string $state The state of the issues to fetch. Defaults to open.
     * @return array
     */
    private function fetchIssues(string $state = IssueState::OPEN->value, string $filter = IssueFilter::ASSIGNED->value)
    {
        if (!IssueState::tryFrom($state)) {
            throw new \InvalidArgumentException('Invalid state. Must be one of: open, closed, all');
        }

        $validFilters = ['assigned', 'created', 'mentioned', 'subscribed', 'repos', 'all'];
        if (!in_array($filter, $validFilters)) {
            throw new \InvalidArgumentException('Invalid filter. Must be one of: ' . implode(', ', $validFilters));
        }

        $token = env('GITHUB_PERSONAL_TOKEN');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get('https://api.github.com/issues', [
                    'state' => $state,
                    'filter' => $filter,
                ]);

        if ($response->successful()) {
            return $response->json();
        }

        // log if the response is not successful
        Log::error('GitHub API request failed', [
            'status' => $response->status(),
            'message' => $response->body(),
        ]);

        return [];
    }

    /**
     * Fetch a single issue from GitHub API.
     * 
     * @param string $owner The owner of the repository
     * @param string $repo The name of the repository
     * @param int $issueNumber The issue number
     * @return array|null Returns the issue data or null if not found
     */
    private function fetchIssue(string $owner, string $repo, int $issueNumber)
    {
        $token = env('GITHUB_PERSONAL_TOKEN');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get("https://api.github.com/repos/{$owner}/{$repo}/issues/{$issueNumber}");

        if ($response->successful()) {
            $issueData = $response->json();

            $comments = $this->fetchFromResourceUrl($issueData['comments_url']) ?? [];
            // $reactions = $this->fetchFromResourceUrl($issueData['reactions']['url']);
            $events = $this->fetchFromResourceUrl($issueData['events_url']) ?? [];

            // $issueData['reactions_data'] = $reactions ?? [];

            $issueData['timeline_items'] = $this->buildTimelineItems($events, $comments);

            // could not provide projects and relationships from the API response. It's probably
            // possible to get them from the API, but it's not clear to me how to do it.
            return $issueData;
        }

        Log::error('GitHub API request failed', [
            'status' => $response->status(),
            'message' => $response->body(),
        ]);

        return null;
    }

    /**
     * Fetch data from a GitHub API resource URL.
     * 
     * @param string $resourceUrl The full GitHub API URL for the resource
     * @return array|null Returns the resource data or null if not found
     */
    private function fetchFromResourceUrl(string $resourceUrl): ?array
    {
        $token = env('GITHUB_PERSONAL_TOKEN');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get($resourceUrl);

        if ($response->successful()) {
            return $response->json();
        }

        Log::error('GitHub API request failed', [
            'status' => $response->status(),
            'message' => $response->body(),
        ]);

        return [];
    }

    /**
     * Merge and sort issue events and comments chronologically.
     * 
     * @param array $events Array of issue events
     * @param array $comments Array of issue comments
     * @return array Chronologically sorted timeline items
     */
    private function buildTimelineItems(array $events, array $comments): array
    {
        $timeline = [];

        // Add events
        foreach ($events as $event) {
            $timeline[] = [
                'type' => 'event',
                'created_at' => $event['created_at'],
                'data' => $event
            ];
        }

        // Add comments 
        foreach ($comments as $comment) {
            $timeline[] = [
                'type' => 'comment',
                'created_at' => $comment['created_at'],
                'data' => $comment
            ];
        }

        // Sort by created_at timestamp
        usort($timeline, function ($a, $b) {
            return strtotime($a['created_at']) - strtotime($b['created_at']);
        });

        return $timeline;
    }
}

enum IssueState: string
{
    case OPEN = 'open';
    case CLOSED = 'closed';
    case ALL = 'all';
}

enum IssueFilter: string
{
    case ASSIGNED = 'assigned';
    case CREATED = 'created';
    case MENTIONED = 'mentioned';
    case SUBSCRIBED = 'subscribed';
    case REPOS = 'repos';
    case ALL = 'all';
}
