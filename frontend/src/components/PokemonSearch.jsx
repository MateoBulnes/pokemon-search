import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import PokemonResults from "./PokemonResults";
import Loader from "./Loader";

const PokemonSearch = () => {

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    return (
        <Box>
            {isLoading && (<Loader />)}
            <SearchBar  pokemons={pokemons} setPokemons={setPokemons} setIsLoading={setIsLoading} setNotFound={setNotFound}/>
            <PokemonResults pokemons={pokemons} isLoading={isLoading} notFound={notFound}/>
        </Box>
    )
}

export default PokemonSearch;