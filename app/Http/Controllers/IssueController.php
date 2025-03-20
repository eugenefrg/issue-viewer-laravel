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
            'id' => $id,
            'owner' => $owner,
            'repo' => $repo,
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
            return $response->json();
        }

        Log::error('GitHub API request failed', [
            'status' => $response->status(),
            'message' => $response->body(),
        ]);

        return null;
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
