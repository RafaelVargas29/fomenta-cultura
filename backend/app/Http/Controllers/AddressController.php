<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{

    public function index()
    {
        return Address::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try{
            $address = new Address;

            $address->cep          = $request->cep;
            $address->public_place = $request->public_place;
            $address->complement   = $request->complement;
            $address->neighborhood = $request->neighborhood;
            $address->locality     = $request->locality;
            $address->uf           = $request->uf;
            $address->save();

            return response()->json(['message' => 'Endereço Cadastrado com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao cadastrar Endereço!'], 500);
        }
    }

    public function show(int $address)
    {
        try {
            $addressModel = Address::findOrFail($address);
            return response()->json([
                'address' => $addressModel,
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Endereço não encontrado!'], 500);
        }
    }

    public function edit(Address $address)
    {
        //
    }

    public function update(Request $request, Address $address)
    {
        try{
            $address->cep          = $request->cep;
            $address->public_place = $request->public_place;
            $address->complement   = $request->complement;
            $address->neighborhood = $request->neighborhood;
            $address->locality     = $request->locality;
            $address->uf           = $request->uf;
            $address->save();

            return response()->json(['message' => 'Endereço editado com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao editar Endereço!'], 500);
        }
    }

    public function destroy(Address $address)
    {
        //
    }
}
