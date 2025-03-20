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
