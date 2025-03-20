<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class LocalEnvironmentServiceProvider extends ServiceProvider
{
    public function register()
    {
        if (file_exists(base_path('.env.local'))) {
            $dotenv = \Dotenv\Dotenv::createImmutable(base_path(), '.env.local');
            $dotenv->load();
        }
    }
}