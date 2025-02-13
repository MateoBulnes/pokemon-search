import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import PokemonResults from "./PokemonResults";
import Loader from "./Loader";

const PokemonSearch = () => {

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Box>
            {isLoading && (<Loader />)}
            <SearchBar setPokemons={setPokemons} setIsLoading={setIsLoading}/>
            <PokemonResults pokemons={pokemons}/>
        </Box>
    )
}

export default PokemonSearch;