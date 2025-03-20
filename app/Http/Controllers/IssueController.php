<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IssueController extends Controller
{
    public function show(string $id)
    {
        return Inertia::render('Issue/View', [
            'id' => $id,
        ]);
    }

    public function list()
    {
        return Inertia::render('Issue/List');
    }
}
