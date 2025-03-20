<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Issue #{{ $id }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="antialiased">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold my-4">Issue #{{ $id }}</h1>
    </div>
</body>

</html>