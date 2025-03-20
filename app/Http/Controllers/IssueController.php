<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IssueController extends Controller
{
    public function show(string $id)
    {
        return view('issue', ['id' => $id]);
    }
}