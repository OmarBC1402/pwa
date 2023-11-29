import React, { useContext, useState } from "react";
import { dataContext } from "../components/context/DataContext";
const Pedido = () => {
    const { cart } = useContext(dataContext);
    const [formData, setFormData] = useState({
      productos: cart.map((product) => `${product.nombre} (Cantidad: ${product.quanty})`).join(", "),
      fecha: new Date().toISOString().slice(0, 10),
      status: "nuevo",
      total: cart.reduce((acc, product) => acc + product.precio * product.quanty, 0),
      nombreCliente: "",
      direccionCliente: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Datos del formulario:", formData);
      // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor, etc.
    };
  
    return (
      <div className="pago-carrito container mt-4">
        <h2 className="mb-4">Formulario de Pedido</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Productos:</label>
            <span className="d-block mb-2">{formData.productos}</span>
            <input type="hidden" name="productos" value={formData.productos} onChange={handleInputChange} readOnly />
          </div>
          <div className="form-group">
            <span className="hidden-select">
            <label>Status:</label>
            <select className="form-control" name="status" value={formData.status} onChange={handleInputChange}>
              <option value="nuevo">Nuevo</option>
              {/* Agrega más opciones de status según tus necesidades */}
            </select>
            </span>
          </div>
          <div className="form-group">
            <label>Total: <strong>$ {formData.total}</strong></label>
          </div>
          <div className="form-group">
            <label>A nombre de:</label>
            <input
              type="text"
              className="form-control"
              name="nombreCliente"
              value={formData.nombreCliente}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              className="form-control"
              name="direccionCliente"
              value={formData.direccionCliente}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">Enviar Pedido</button>
        </form>
      </div>
    );
  };
  
  export default Pedido;