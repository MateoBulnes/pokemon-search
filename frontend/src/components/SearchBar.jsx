import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useCallback } from "react";

const SearchBar = ({ setPokemons, setIsLoading }) => {

    const [search, setSearch] = useState('');


    const handleSearch = async () => {
        console.log('buscandooo')
        if (search.trim() === "") {
            setPokemons([]); // Si el input está vacío, limpiar resultados
            return;
        }

        setIsLoading(true);
        await fetch(`http://localhost:8000/api/pokemon?search=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemons(data);
                setIsLoading(false);
            })
            .catch(() => {
                setPokemons([]);
                setIsLoading(false);
            });
    };

    return (
        <Box sx={{display: 'flex', gap: '20px'}}>
            <TextField 
                id="outlined-basic" 
                label="Ingrese el nombre de un pokemon" 
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{
                    width: '80%'
                }}
            />
            <Button 
                onClick={handleSearch}
                sx={{
                  width: '20%', 
                  textTransform: 'none',
                  backgroundColor: '#00B3EC',
                  color: '#FFFFFF'
                }}
            >
                Buscar
            </Button>
        </Box>
    )
}

export default SearchBar;