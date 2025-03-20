<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IssueController;

Route::get('/', function () {
    return app(IssueController::class)->list();
});

Route::get('/issue/{owner}/{repo}/{id}', function (string $owner, string $repo, string $id) {
    return app(IssueController::class)->show($owner, $repo, $id);
});