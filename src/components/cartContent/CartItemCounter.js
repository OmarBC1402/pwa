import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const CartItemCounter = ({ product }) => {
    const { buyProducts, setCart, cart } = useContext(dataContext); 

    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === product.id);
        productrepeat.quanty !== 1 && setCart(cart.map((item)=>item.id === product.id ? {...product, quanty: 
            productrepeat.quanty - 1 } : item))

    }
return (
    <>
    <td className="btn btn-warning mr-3" onClick={ ()=> decrese(product)}>-</td><td>{product.quanty}</td><td className="btn btn-success ml-3" onClick={ ()=> buyProducts(product)}>+</td>
    </>
  )
}

export default CartItemCounter