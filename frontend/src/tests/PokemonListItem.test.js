import { render, screen } from "@testing-library/react";
import PokemonListItem from "../components/PokemonListItem"; // Ajusta la ruta según tu estructura de archivos

// Mock del componente `PokemonDetailList`
jest.mock("../components/PokemonDetailList", () => jest.fn(() => <div data-testid="pokemon-detail-list"></div>));

describe("PokemonListItem Component", () => {
  const mockPokemon = {
    name: "pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    height: 4,
    weight: 60,
    types: ["Electric"],
    abilities: ["Static", "Lightning Rod"],
  };

  test("debe renderizar correctamente el nombre del Pokémon en mayúscula inicial", () => {
    render(<PokemonListItem pokemon={mockPokemon} />);
    const pokemonName = screen.getByText("Pikachu"); // Formateado
    expect(pokemonName).toBeInTheDocument();
  });

  test("debe renderizar la imagen del Pokémon con el src y alt correctos", () => {
    render(<PokemonListItem pokemon={mockPokemon} />);
    const pokemonImage = screen.getByRole("img", { name: /imagen de pikachu/i });
    expect(pokemonImage).toHaveAttribute("src", mockPokemon.image);
    expect(pokemonImage).toHaveAttribute("alt", "Imagen de pikachu");
  });

  test("debe renderizar dentro de un ListItem", () => {
    render(<PokemonListItem pokemon={mockPokemon} />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
