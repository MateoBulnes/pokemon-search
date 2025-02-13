import './App.css';
import { Container, Divider } from "@mui/material";
import SiteHeader from './components/SiteHeader';
import PokemonSearchBar from './components/SearchBar';
import PokemonResults from './components/PokemonResults';
import SiteFooter from './components/SiteFooter';
import PokemonSearch from './components/PokemonSearch';

const App = () => {
  return (
    <Container sx={{height: '100vh', display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px 30px'}}>
      <SiteHeader />
      <PokemonSearch />
      <Divider sx={{mt: 1, mb: 2}}/>
      <SiteFooter />
    </Container>
  )
}

export default App;
