import './App.css';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Conocenos from './pages/Conocenos';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import Pedido from './pages/Pedido';
import DataProvider from './components/context/DataContext';
import CartContent from './components/cartContent/CartContent';
import ShowPedidos from './components/acciones/ShowPedidos';
import CreatePedido from './components/acciones/CreatePedido';
import EditPedido from './components/acciones/EditPedido';


function App() {
  
  return (
  <>
        <DataProvider>
          <Routes>
          <Route path="/" element={ <NavBar /> }>
            <Route path="/" element={ <Home /> } />
            <Route path="/Conocenos" element={ <Conocenos /> } />
            <Route path="/Contacto" element={ <Contacto /> } />
            <Route path="/Login" element={ <Login /> } />    
            <Route path="*" element={ <Error /> } />
            <Route path="/cart" element={ <CartContent /> } />
            <Route path="/pedidos" element={ <ShowPedidos /> } />
            <Route path="/pedido" element={ <Pedido /> } />
            <Route path="/create" element={ <CreatePedido /> } />
            <Route path="/edit" element={ <EditPedido /> } />   

          </Route>
        </Routes>
        </DataProvider>

       
  </>
  
  );
}

export default App;
