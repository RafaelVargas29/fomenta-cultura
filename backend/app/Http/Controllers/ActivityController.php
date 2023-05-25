<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        return Activity::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(int $activity)
    {
        try {
            $activityModel = Activity::findOrFail($activity);
            return response()->json([
                'activity' => $activityModel
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => "Atividade não encontrada"], 404);
        }
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
