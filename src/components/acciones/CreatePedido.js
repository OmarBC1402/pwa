import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost/8000/api/pedido/';

const CreatePedido = () => {
  const [producto, setProducto] = useState('')
  const [fecha, setFecha] = useState('')
  const [status, setStatus] = useState('')
  const [total, setTotal] = useState('')
  const [cliente, setCliente] = useState('')
  const [direccion, setDireccion] = useState('')  

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, { producto: producto, fecha: fecha, status: status, total: total, cliente: cliente, direccion: direccion } )
    navigate('/')
  }

  return (
    <div>
      <h3 className='m-auto'>Crear Pedido</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label>Producto</label>
          <input value={producto} onChange={(e) => setProducto(e.target.value)} type="text" className='form-control' />
        </div>
        <div className='mb-3'>
          <label>Fecha</label>
          <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" className='form-control' />
        </div>
        <div className='mb-3'>
          <label>Estatus</label>
          <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" className='form-control' />
        </div>
        <div className='mb-3'>
          <label>Total</label>
          <input value={total} onChange={(e) => setTotal(e.target.value)} type="text" className='form-control' />
        </div>
        <div className='mb-3'>
          <label>A nombre de:</label>
          <input value={cliente} onChange={(e) => setCliente(e.target.value)} type="text" className='form-control' />
        </div>
        <div className='mb-3'>
          <label>Direccion</label>
          <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className='form-control' />
        </div>
        <button className='btn btn-primary'>Crear</button>
      </form>
    </div>
  );
};

export default CreatePedido;
