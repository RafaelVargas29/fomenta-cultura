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

    public function store(Request $request)
    {
        try {
            $activity = new Activity;

            $activity->name        = $request->name;
            $activity->date        = $request->date;
            $activity->time        = $request->time;
            $activity->description = $request->description;
            $activity->image       = $request->image;
            $activity->save();

            return response()->json(['message' => 'Atividade cadastrada com sucesso'], 200);

        } catch (Exception $e) {
            return response()->json(['message' => 'Falha ao cadastrar atividade'], 500);
        }
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

    public function update(Request $request, Activity $activity)
    {
        try {
            $activity->name        = $request->name;
            $activity->date        = $request->date;
            $activity->time        = $request->time;
            $activity->description = $request->description;
            $activity->image       = $request->image;
            $activity->save();

            return response()->json(['message' => 'Atividade editada com sucesso'], 200);

        } catch (Exception $e) {
            return response()->json(['message' => 'Falha ao editar atividade'], 500);
        }

    }

    public function destroy(string $id)
    {
        try {
            $activity = Activity::findOrFail($id);
            $activity->delete();

            return response()->json(['message' => 'Atividade deletada com sucesso'], 200);
            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao deletar a atividade'], 500);
        }
    }
}
