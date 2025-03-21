Notes:
Illuminate\Encryption\MissingAppKeyException
run

```
php artisan key:generate
php artisan config:cache
```

after installing composer deps:

```
php artisan config:clear
php artisan route:clear
```

Setup Guide:
Generate your GitHub personal access token (Classic) with the following permissions:
`read:enterprise, read:org, read:project, read:repo_hook, read:user, repo, user:email`
note: it's better to use classic for this use case, because when I tried using fine-grained tokens,
I was not getting all the issues (organization issues were not included).

paste the token in the `.env.local` file.

```
GITHUB_PERSONAL_TOKEN=your_token_here
```

Limitations:
Project - could not get the project for the issue.
Sub/Parent issues - could not get the sub issues for the issue, only that it's been set.
This only shows the issues, timeline of events in an issue, assignees, labels, and milestones.
This is because the GitHub API does not provide this information.
Optimized for Desktop Experience only.

TODO:
Style

- Main Page
- Issue Page
  Test with more events
  Lint
  Refactor to breakdown the components
  Add testing where possible
