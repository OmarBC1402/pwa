import './App.css';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Conocenos from './pages/Conocenos';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error'

function App() {
  return (
  <>
        <Routes>
          <Route path="/" element={ <NavBar /> }>
          <Route path="Conocenos" element={ <Conocenos /> } />
            <Route path="Contacto" element={ <Contacto /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="Login" element={ <Login /> } />    
            <Route path="*" element={ <Error /> } />     
          </Route>
        </Routes>
  </>
  
  );
}

export default App;
