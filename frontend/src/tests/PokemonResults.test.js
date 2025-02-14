import { render, screen } from '@testing-library/react';
import PokemonResults from '../components/PokemonResults';
import PokemonListItem from '../components/PokemonListItem';

// Mock del componente hijo para evitar dependencias innecesarias
jest.mock('../components/PokemonListItem', () => () => <div data-testid="pokemon-item"></div>);

describe('PokemonResults Component', () => {
    test('muestra la lista de pokemons cuando hay datos y no está cargando', () => {
        const pokemons = [{ name: 'Pikachu', id: 25 }, { name: 'Charmander', id: 4 }];

        render(<PokemonResults pokemons={pokemons} isLoading={false} notFound={false} />);

        const items = screen.getAllByTestId('pokemon-item');
        expect(items).toHaveLength(2);
    });

    test('muestra el mensaje de "No se encontraron Pokemons" cuando notFound es true', () => {
        render(<PokemonResults pokemons={[]} isLoading={false} notFound={true} />);

        expect(screen.getByText(/No se encontraron Pokemons/i)).toBeInTheDocument();
    });

    test('no muestra nada cuando no hay pokemons y notFound es false', () => {
        render(<PokemonResults pokemons={[]} isLoading={false} notFound={false} />);
        
        expect(screen.queryByTestId('pokemon-item')).not.toBeInTheDocument();
        expect(screen.queryByText(/No se encontraron Pokemons/i)).not.toBeInTheDocument();
    });

    test('no muestra la lista mientras está cargando', () => {
        const pokemons = [{ name: 'Bulbasaur', id: 1 }];
        
        render(<PokemonResults pokemons={pokemons} isLoading={true} notFound={false} />);

        expect(screen.queryByTestId('pokemon-item')).not.toBeInTheDocument();
    });
});