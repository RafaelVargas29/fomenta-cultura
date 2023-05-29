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

            $activity->title_event        = $request->title_event;
            $activity->date_event         = $request->date_event;
            $activity->hours_event        = $request->hours_event;
            $activity->description_event  = $request->description_event;
            $activity->image_event        = $request->image_event;
            $activity->status_event       = $request->status_event;
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

    public function update_event(Request $request, Activity $activity)
    {
        try {
            $activity->title_event        = $request->title_event;
            $activity->date_event         = $request->date_event;
            $activity->hours_event        = $request->hours_event;
            $activity->description_event  = $request->description_event;
            $activity->image_event        = $request->image_event;
            $activity->status_event       = $request->status_event;
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
