<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;

class OrganizationController extends Controller
{
    public function index()
    {
        return Organization::all();
    }

    public function store(Request $request)
    {
        try {
            $organization = new Organization;

            $organization->name      = $request->name;
            $organization->email     = $request->email;
            $organization->address   = $request->address;
            $organization->contact   = $request->contact;
            $organization->password  = $request->password;
            $organization->save();

            return response()->json(['message' => 'Organização cadastrada com sucesso'], 200);

        } catch (Exception $e) {
            return response()->json(['message' => 'Falha ao cadastrar organização'], 500);
        }
    }

    public function show(int $organization)
    {
        try {
            $organizationModel = Organization::findOrFail($organization);
            return response()->json([
                'organization' => $organizationModel
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => "Organização não encontrada"], 404);
        }
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, Organization $organization)
    {
        try {
            $organization->name      = $request->name;
            $organization->email     = $request->email;
            $organization->address   = $request->address;
            $organization->contact   = $request->contact;
            $organization->password  = $request->password;
            $organization->save();

            return response()->json(['message' => 'Organização editada com sucesso'], 200);

        } catch (Exception $e) {
            return response()->json(['message' => 'Falha ao editar organização'], 500);
        }

    }

    public function destroy(string $id)
    {
        // try {
        //     $organization = organization::findOrFail($id);
        //     $organization->delete();

        //     return response()->json(['message' => 'Organização deletada com sucesso'], 200);

        // } catch (\Exception $e) {
        //     return response()->json(['message' => 'Falha ao deletar a organização'], 500);
        // }
    }

}
