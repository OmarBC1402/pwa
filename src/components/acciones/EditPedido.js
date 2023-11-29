import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const endpoint = 'http://localhost/8000/api/pedido/';

const EditPedido = () => {

  const [producto, setProducto] = useState('')
  const [fecha, setFecha] = useState('')
  const [status, setStatus] = useState('')
  const [total, setTotal] = useState('')
  const [cliente, setCliente] = useState('')
  const [direccion, setDireccion] = useState('')  
  const {id} = useParams()

  const navigate = useNavigate();

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}${id}`, {
      producto: producto,
      fecha: fecha,
      status: status,
      total: total,
      cliente: cliente,
      direccion: direccion
    })
    navigate('/')
  }

  useEffect( ()=>{
    const getPedidoById = async() => {
    const response = await axios.get(`${endpoint}${id}`)
    setProducto(response.data.producto)
    setFecha(response.data.fecha)
    setStatus(response.data.status)
    setTotal(response.data.total)
    setCliente(response.data.cliente)
    setDireccion(response.data.direccion)
    }
    getPedidoById()
  }, [])
  
  return (
    <div>
    <h3 className='m-auto'>Editar Pedido</h3>
    <form onSubmit={update}>
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
  )
}

export default EditPedido