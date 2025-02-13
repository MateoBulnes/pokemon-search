import { Box, Typography, TextField, Button } from "@mui/material";

const PokemonSearchBar = () => {

    return (
        <Box sx={{display: 'flex', gap: '20px'}}>
            <TextField 
                id="outlined-basic" 
                label="Ingrese el nombre de un pokemon" 
                variant="outlined"
                sx={{
                    width: '80%'
                }}
            />
            <Button 
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

export default PokemonSearchBar;