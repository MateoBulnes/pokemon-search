<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; 

class PokemonController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->query('search');
        if (!$query) {
            return response()->json(['error' => 'El parámetro "search" es requerido'], 400);
        }

        $url = "https://pokeapi.co/api/v2/pokemon/$query";

        $response = Http::get($url);

        // Verificamos si el Pokémon existe
        if ($response->failed()) {
            return response()->json(['error' => 'Pokémon no encontrado'], 404);
        }

        return response()->json($response->json());
    }
}