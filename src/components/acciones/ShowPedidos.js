import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const endpoint = 'http://localhost:8000/api';

const ShowPedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        getAllPedidos();
    }, []);

    const getAllPedidos = async () => {
        try {
            const response = await axios.get(`${endpoint}/pedidos`);
            // Establece el estado solo con la parte de datos de la respuesta
            setPedidos(response.data);
        } catch (error) {
            console.error("Error al obtener los pedidos:", error);
        }
    }

    const deletePedido = async (id) => {
        try {
            await axios.delete(`${endpoint}/pedido/${id}`);
            getAllPedidos();
        } catch (error) {
            console.error("Error al eliminar el pedido:", error);
        }
    }

    return (
        <div>
            <div className="d-grip gap-2">
                <Link to="/create" className="btn btn-success">Crear Pedido</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Fecha</th>
                        <th>Estatus</th>
                        <th>Total</th>
                        <th>Cliente</th>
                        <th>Direccion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                            <td>{pedido.producto}</td>
                            <td>{pedido.fecha}</td>
                            <td>{pedido.status}</td>
                            <td>{pedido.total}</td>
                            <td>{pedido.cliente}</td>
                            <td>{pedido.direccion}</td>
                            <td>
                                <Link className="btn btn-warning" to={`/edit/${pedido.id}`}>Editar</Link>
                                <button onClick={() => deletePedido(pedido.id)} className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowPedidos;