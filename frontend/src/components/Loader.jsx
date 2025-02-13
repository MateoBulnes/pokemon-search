import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute', 
        top: '50%',
        left: '47%',
        zIndex: '9999'
      }}
    >
      <CircularProgress size={60} sx={{color: '#00B3EC'}} />
    </Box>
  );
};

export default Loader;