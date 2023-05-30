<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        return Category::all();
    }

    public function create()
    {

    }

    public function store(Request $request)
    {
        try {
            $category = new Category;

            $category->name_category = $request->name_category;
            $category->save();
            return response()->json(['message' => 'Categoria cadastrada com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao cadastrar categoria!'], 500);
        }
    }

    public function show(int $category)
    {
        try {
            $categoryModel = Category::findOrFail($category);
            return response()->json([
                'category' => $categoryModel,
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Categoria não encontrada!'], 500);
        }

    }

    public function edit(Category $category)
    {
        //
    }

    public function update(Request $request, Category $category)
    {
        try {
            $category->name_category = $request->name_category;
            $category->save();
            return response()->json(['message' => 'Categoria editada com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao editar categoria!'], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();
            return response()->json(['message' => 'Categoria deletada com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Falha ao deletar a categoria'], 500);
        }
    }
}
