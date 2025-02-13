import { Box, Typography, ListItem } from "@mui/material";
import PokemonDetailList from "./PokemonDetailList";

const PokemonListItem = ({ pokemon }) => {

    const { name, image, height, weight, types, abilities } = pokemon;

    const formatearNombre = (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    return (
        <ListItem 
          sx={{ 
            backgroundColor: '#F6F6F6', 
            borderRadius: '15px', 
            display: 'flex',
            gap: '20px',
            padding: '20px'
          }}
        >
            <img src={image} alt={`Imagen de ${name}`} style={{ width: '10.5%' }} />
            <Box sx={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                <Typography variant="h5" sx={{marginBottom: '5px'}}>{formatearNombre(name)}</Typography>
                <Box>
                  <PokemonDetailList height={height} weight={weight} types={types} abilities={abilities}/>
                </Box>
            </Box>
        </ListItem>
    )
}

export default PokemonListItem;