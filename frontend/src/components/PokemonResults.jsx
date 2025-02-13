import { Box, List } from "@mui/material";
import PokemonListItem from "./PokemonListItem";

const PokemonResults = ({ pokemons }) => {

    const dummyPokemons = [
        {
            "id": 1,
            "name": "bulbasaur",
            "base_experience": 64,
            "height": 7,
            "weight": 69,
            "types": ["grass", "poison"],
            "img": "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png"
        },
        {
            "id": 4,
            "name": "charmander",
            "base_experience": 62,
            "height": 6,
            "weight": 85,
            "types": ["fire"],
            "img": "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png"
        },
        {
            "id": 7,
            "name": "squirtle",
            "base_experience": 63,
            "height": 5,
            "weight": 90,
            "types": ["water"],
            "img": "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png"
        },
        {
            "id": 25,
            "name": "pikachu",
            "base_experience": 112,
            "height": 4,
            "weight": 60,
            "types": ["electric"],
            "img": "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/025.png"
        },
        {
            "id": 39,
            "name": "jigglypuff",
            "base_experience": 95,
            "height": 5,
            "weight": 55,
            "types": ["normal", "fairy"],
            "img": "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/039.png"
        }
    ]


    return (
        <Box sx={{ height: '70vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#E0DFDF transparent' }}>
            <List sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {dummyPokemons.map((pkm, index) => {
                    return (
                        <PokemonListItem key={index} pokemon={pkm}/>
                    )
                })}
            </List>
        </Box>
    )
}

export default PokemonResults;