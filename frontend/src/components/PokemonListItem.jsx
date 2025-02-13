import { Box, Typography, ListItem } from "@mui/material";

const PokemonListItem = ({ pokemon }) => {

    return (
        <ListItem 
          sx={{ 
            backgroundColor: '#F6F6F6', 
            borderRadius: '15px', 
            display: 'flex',
            gap: '20px'
          }}
        >
            <img src={pokemon.img} alt={`Imagen de ${pokemon.name}`} style={{ width: '10%' }} />
            <Box sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                <Typography variant="h6">{pokemon.name}</Typography>
            </Box>
        </ListItem>
    )
}

export default PokemonListItem;