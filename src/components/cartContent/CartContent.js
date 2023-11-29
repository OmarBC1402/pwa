import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import Profile2 from "../Profile2";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";


const CartContent = () => {
  const {cart} = useContext(dataContext);
  return cart.length > 0 ? (
    <>
    <div>
    <div className="carrito">
    <h3 className="text-center">Carrito de <Profile2 /> </h3>
    <CartElements />
    <CartTotal />
    <Link className="" to="/Pedido">
    <button className="btn btn-success">Pagar</button>
    </Link>
    
    </div>
    <div className="">
    
    </div>
    </div>
    </>
  ): (
    <>
    <br/>
    <h4 className="cartTotal">No hay nada en tu carrito, es tiempo de comprar algo!</h4>
    </>
  )

}

export default CartContent