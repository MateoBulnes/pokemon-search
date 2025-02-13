import { Box, Typography, Button } from "@mui/material";

const SiteFooter = () => {

    return (
        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '0vh'}}>
            <Typography>Desarrollado por Mateo Bulnes</Typography>
            <Button 
                onClick={() => window.location.href = "https://github.com/MateoBulnes/pokemon-search"}
                sx={{
                  width: '30%', 
                  textTransform: 'none',
                  backgroundColor: '#A1A2A2',
                  color: '#FFFFFF',
                  transition: '0.3s',
                  '&:hover':{
                    backgroundColor: '#BCBABA'
                  }
                }}
            >
                Link a mi repo
            </Button>
        </Box>
    )
}

export default SiteFooter;