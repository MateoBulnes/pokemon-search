import { useState, useCallback } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const SearchBar = ({ pokemons, setPokemons, setIsLoading, setNotFound }) => {

    const [search, setSearch] = useState('');


    const handleSearch = async () => {
        pokemons.length > 0 && setPokemons([]);
        setNotFound(false);
        
        if (search.trim() === "") {
            setPokemons([]); 
            return;
        }

        setIsLoading(true);
        await fetch(`http://localhost:8000/api/pokemon?search=${search}`)
            .then((res) => res.json())
            .then((data) => {
                data.length <= 0 && setNotFound(true);
                setPokemons(data);
                setIsLoading(false);
            })
            .catch(() => {
                setPokemons([]);
                setIsLoading(false);
            });
    };

    const handleDeleteSearch = () => {
        setPokemons([]);
        setSearch('');
        setNotFound(false);
    }

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
                  width: '10%', 
                  textTransform: 'none',
                  backgroundColor: '#00B3EC',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  '&:hover':{
                    backgroundColor: '#04c2ff'
                  }
                }}
            >
                Buscar
            </Button>

            <Button 
                aria-label="Eliminar búsqueda" 
                sx={{backgroundColor: '#ec4a4a', '&:hover': {backgroundColor: '#ff5656'} }}
                onClick={handleDeleteSearch}
            >
                <DeleteIcon sx={{color: '#FFFFFF', fontSize: '30px'}}/>
            </Button>
        </Box>
    )
}

export default SearchBar;