import { render, screen } from "@testing-library/react";
import PokemonDetailList from "../components/PokemonDetailList";

describe("PokemonDetailList Component", () => {
  const mockProps = {
    height: 4,
    weight: 60,
    types: ["Electric"],
    abilities: ["Static", "Lightning Rod"],
  };

  test("debe renderizar correctamente los tipos del Pokémon", () => {
    render(<PokemonDetailList {...mockProps} />);
    expect(screen.getByText(/Tipos:/i)).toBeInTheDocument();
    expect(screen.getByText("Electric")).toBeInTheDocument();
  });

  test("debe renderizar correctamente las habilidades del Pokémon", () => {
    render(<PokemonDetailList {...mockProps} />);
    expect(screen.getByText(/Habilidades:/i)).toBeInTheDocument();
    expect(screen.getByText("Static, Lightning Rod")).toBeInTheDocument();
  });

  test("debe renderizar la altura y el peso correctamente", () => {
    render(<PokemonDetailList {...mockProps} />);
    expect(screen.getByText(/Height:/i)).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText(/Weight:/i)).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
  });
});
