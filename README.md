# GitHub Issue Viewer

A web application for viewing GitHub issues with their timelines, assignees, labels, and milestones.

## Prerequisites

- Node.js and npm
- PHP and Composer
- GitHub Personal Access Token (Classic)

## Installation

1. Install dependencies:

    ```bash
    composer install
    npm install
    ```

2. Generate application key and clear cache:

    ```bash
    php artisan key:generate
    php artisan config:cache
    php artisan config:clear
    php artisan route:clear
    ```

3. Configure GitHub token:

    - Generate a GitHub personal access token (Classic) with the following permissions:
        - `read:enterprise`
        - `read:org`
        - `read:project`
        - `read:repo_hook`
        - `read:user`
        - `repo`
        - `user:email`
    - Add your token to `.env.local`:
        ```
        GITHUB_PERSONAL_TOKEN=your_token_here
        ```

    Note: Classic tokens are recommended over fine-grained tokens to ensure access to organization issues.

## Running the Application

1. Start the development server (in separate terminals):

    ```bash
    npm run dev
    ```

    ```bash
    php artisan serve
    ```

2. Open the application in your browser:
    ```
    http://127.0.0.1:8000
    ```

## Limitations

- Project information is not available for issues
- Sub/Parent issue relationships are limited (only shows if they exist)
- Only displays issues, timeline events, assignees, labels, and milestones
- Optimized for desktop experience only

## Troubleshooting

If you encounter `Illuminate\Encryption\MissingAppKeyException`, run:

```bash
php artisan key:generate
php artisan config:cache
```
