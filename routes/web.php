<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IssueController;

Route::get('/', function () {
    return view('home');
});

Route::get('/issue/{id}', function (string $id) {
    return view('issue', ['id' => $id]);
});