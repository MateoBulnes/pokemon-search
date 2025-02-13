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

        $response = Http::get("https://pokeapi.co/api/v2/pokemon/?limit=100");
        if (!$response->successful()) {
            return response()->json(['error' => 'No se pudo obtener la lista de Pokémon'], 500);
        }

        $pokemonsList = $response->json()['results'];

        $filteredPokemons = array_filter($pokemonsList, function ($pokemon) use ($query) {
            return stripos($pokemon['name'], $query) !== false; 
        });

        $detailedPokemons = array_map(function ($pokemon) {
            $pokemonData = Http::get($pokemon['url'])->json();
            
            return [
                'name' => $pokemonData['name'],
                'id' => $pokemonData['id'],
                'image' => $pokemonData['sprites']['front_default'],
                'types' => array_map(fn($type) => $type['type']['name'], $pokemonData['types']),
                'abilities' => array_map(fn($ability) => $ability['ability']['name'], $pokemonData['abilities']),
                'height' => $pokemonData['height'],
                'weight' => $pokemonData['weight']
            ];
        }, array_values($filteredPokemons));

        return response()->json(array_values($detailedPokemons));
    }
}