<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Http;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'userInfo' => $this->getGithubUserDetails(),
        ]);
    }

    protected function getGithubUserDetails(): array
    {
        $token = env('GITHUB_PERSONAL_TOKEN');

        if (!$token) {
            return [];
        }

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $token,
                'Accept' => 'application/vnd.github.v3+json',
            ])->get('https://api.github.com/user');

            if ($response->successful()) {
                return $response->json();
            }

            return [];
        } catch (\Exception $e) {
            \Log::error('GitHub API Error: ' . $e->getMessage());
            return [];
        }
    }
}