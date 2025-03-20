<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IssueController;

Route::get('/', function () {
    return app(IssueController::class)->list();
});

Route::get('/issue/{id}', function (string $id) {
    return app(IssueController::class)->show($id);
});