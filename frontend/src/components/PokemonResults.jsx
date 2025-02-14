import { Box, List, Typography } from "@mui/material";
import PokemonListItem from "./PokemonListItem";

const PokemonResults = ({ pokemons, isLoading, notFound }) => {

    return (
        <Box sx={{ height: '60vh', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#E0DFDF transparent' }}>
            {(pokemons.length > 0 && !isLoading) && (
                <List sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {pokemons.map((pkm, index) => {
                        return (
                            <PokemonListItem key={index} pokemon={pkm} />
                        )
                    })}
                </List>
            )}

            {notFound && (
                <Box
                    sx={{
                        backgroundColor: '#ffbdbd',
                        padding: '15px',
                        borderRadius: '10px',
                        marginTop: '15px'
                    }}
                >
                    <Typography>No se encontraron Pokemons</Typography>
                </Box>
            )}

        </Box>
    )
}

export default PokemonResults;