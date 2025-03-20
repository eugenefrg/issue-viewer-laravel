<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="antialiased">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold my-4">Welcome to {{ config('app.name') }}</h1>
        <div class="mt-4">
            <a href="/issue/1" class="text-blue-600 hover:text-blue-800">View Issue #1</a>
        </div>
    </div>
</body>

</html>