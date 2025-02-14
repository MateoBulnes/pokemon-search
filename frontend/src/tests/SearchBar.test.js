import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../components/SearchBar';


const mockSetPokemons = jest.fn();
const mockSetIsLoading = jest.fn();
const mockSetNotFound = jest.fn();


beforeEach(() => {
    jest.clearAllMocks(); // Limpia los mocks antes de cada test

    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([
            { name: 'pikachu' }
        ])
    });
});

describe('SearchBar Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renderiza correctamente', () => {
        render(<SearchBar 
            pokemons={[]} 
            setPokemons={mockSetPokemons} 
            setIsLoading={mockSetIsLoading} 
            setNotFound={mockSetNotFound} 
        />);

        expect(screen.getByLabelText(/Ingrese el nombre de un pokemon/i)).toBeInTheDocument();
        expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
    });

    test('actualiza el estado cuando el usuario escribe', () => {
        render(<SearchBar 
            pokemons={[]} 
            setPokemons={mockSetPokemons} 
            setIsLoading={mockSetIsLoading} 
            setNotFound={mockSetNotFound} 
        />);

        const input = screen.getByLabelText(/Ingrese el nombre de un pokemon/i);
        fireEvent.change(input, { target: { value: 'pikachu' } });

        expect(input.value).toBe('pikachu');
    });

    test('realiza la búsqueda y actualiza la lista de pokemons', async () => {
        render(<SearchBar 
            pokemons={[]} 
            setPokemons={mockSetPokemons} 
            setIsLoading={mockSetIsLoading} 
            setNotFound={mockSetNotFound} 
        />);

        const input = screen.getByLabelText(/Ingrese el nombre de un pokemon/i);
        const button = screen.getByText(/Buscar/i);

        fireEvent.change(input, { target: { value: 'pikachu' } });
        fireEvent.click(button);

        await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

        expect(mockSetIsLoading).toHaveBeenCalledWith(true);
        expect(mockSetPokemons).toHaveBeenCalledWith([{ name: 'pikachu' }]);
        expect(mockSetIsLoading).toHaveBeenCalledWith(false);
    });

    test('muestra el botón de eliminar y limpia la búsqueda', () => {
        render(<SearchBar 
            pokemons={[]} 
            setPokemons={mockSetPokemons} 
            setIsLoading={mockSetIsLoading} 
            setNotFound={mockSetNotFound} 
        />);

        const input = screen.getByLabelText(/Ingrese el nombre de un pokemon/i);
        const deleteButton = screen.getByLabelText('Eliminar búsqueda');

        fireEvent.change(input, { target: { value: 'pikachu' } });
        fireEvent.click(deleteButton);

        expect(input.value).toBe('');
        expect(mockSetPokemons).toHaveBeenCalledWith([]);
    });
});