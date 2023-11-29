import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import CartItemCounter from "./CartItemCounter";


const CartElements = () => {
        const {cart, setCart} = useContext(dataContext);

        const deleteProduct = (id) => {
            const foundId = cart.find((element)=> element.id === id);

            const newCart = cart.filter((element) => {
                return element !== foundId;
            });

            setCart(newCart);
        }
        return cart.map((product) => (
            <div className="m-auto col-10" key={product.id}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={product.id}>
                    <td className="producto-if">{product.id}</td>
                    <td><img src={product.img} alt={product.nombre} width="100" height="100" /></td>
                    <td className="producto-nombre">{product.nombre}</td>
                    <td className="producto-precio">{product.precio * product.quanty}</td>
                    <CartItemCounter product={product} />
                    <td><button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>✖</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ));
          
  
}

export default CartElements