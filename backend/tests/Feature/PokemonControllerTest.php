<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class PokemonControllerTest extends TestCase
{
    /** @test */
    public function it_returns_filtered_pokemon_list()
    {
        Http::fake([
            'https://pokeapi.co/api/v2/pokemon/?limit=100' => Http::response([
                'results' => [
                    ['name' => 'bulbasaur', 'url' => 'https://pokeapi.co/api/v2/pokemon/1/'],
                    ['name' => 'charmander', 'url' => 'https://pokeapi.co/api/v2/pokemon/4/'],
                    ['name' => 'squirtle', 'url' => 'https://pokeapi.co/api/v2/pokemon/7/']
                ]
            ], 200),
            'https://pokeapi.co/api/v2/pokemon/1/' => Http::response([
                'name' => 'bulbasaur',
                'id' => 1,
                'sprites' => ['front_default' => 'bulbasaur.png'],
                'types' => [['type' => ['name' => 'grass']]],
                'abilities' => [['ability' => ['name' => 'overgrow']]],
                'height' => 7,
                'weight' => 69
            ], 200)
        ]);

        
        $response = $this->getJson('/api/pokemon?search=bulba');

        
        $response->assertStatus(200)
            ->assertJsonCount(1) 
            ->assertJsonFragment([
                'name' => 'bulbasaur',
                'id' => 1,
                'image' => 'bulbasaur.png',
                'types' => ['grass'],
                'abilities' => ['overgrow'],
                'height' => 7,
                'weight' => 69
            ]);
    }

    /** @test */
    public function it_returns_empty_list_when_no_pokemon_match()
    {
        Http::fake([
            'https://pokeapi.co/api/v2/pokemon/?limit=100' => Http::response([
                'results' => [
                    ['name' => 'bulbasaur', 'url' => 'https://pokeapi.co/api/v2/pokemon/1/']
                ]
            ], 200)
        ]);

        $response = $this->getJson('/api/pokemon?search=charmander');

        $response->assertStatus(200)
            ->assertJsonCount(0); 
    }

    /** @test */
    public function it_handles_missing_search_parameter()
    {
        $response = $this->getJson('/api/pokemon');

        $response->assertStatus(400)
            ->assertJson([
                'error' => 'El parámetro "search" es requerido'
            ]);
    }

    /** @test */
    public function it_handles_api_failure()
    {
        Http::fake([
            'https://pokeapi.co/api/v2/pokemon/?limit=100' => Http::response(null, 500)
        ]);

        $response = $this->getJson('/api/pokemon?search=bulbasaur');

        $response->assertStatus(500)
            ->assertJson([
                'error' => 'No se pudo obtener la lista de Pokémon'
            ]);
    }
}

