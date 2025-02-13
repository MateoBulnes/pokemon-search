import './App.css';
import { Container, Divider } from "@mui/material";
import SiteHeader from './components/SiteHeader';
import PokemonSearchBar from './components/PokemonSearchBar';
import PokemonResults from './components/PokemonResults';
import SiteFooter from './components/SiteFooter';

const App = () => {
  return (
    <Container sx={{height: '100vh', display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px 30px'}}>
      <SiteHeader />
      <PokemonSearchBar />
      <PokemonResults />
      <Divider sx={{mt: 1, mb: 2}}/>
      <SiteFooter />
    </Container>
  )
}

export default App;
