import { Box, List } from "@mui/material";
import PokemonListItem from "./PokemonListItem";

const PokemonResults = ({ pokemons }) => {

    return (
        <Box sx={{ height: '60vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#E0DFDF transparent' }}>
            <List sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {pokemons.map((pkm, index) => {
                    return (
                        <PokemonListItem key={index} pokemon={pkm}/>
                    )
                })}
            </List>
        </Box>
    )
}

export default PokemonResults;