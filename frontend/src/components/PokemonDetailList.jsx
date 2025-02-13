import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";


const PokemonDetailList = ({ height, weight, types, abilities }) => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '0px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Typography fontWeight={'bold'}>Tipos:</Typography>
                <Typography>{types.join(", ")}</Typography>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Typography fontWeight={'bold'}>Habilidades:</Typography>
                <Typography>{abilities.join(", ")}</Typography>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <List sx={{ display: 'flex', gap: '20px', padding: 0 }}>
                    <Typography><b>Height:</b> {height}</Typography>
                    <Typography><b>Weight:</b> {weight}</Typography>
                </List>
            </div>
        </Box>
    )
}

export default PokemonDetailList;