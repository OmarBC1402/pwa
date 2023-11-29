import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const CartTotal = () => {
    const {cart} = useContext(dataContext);
    const total = cart.reduce((acc,ele)=> acc + ele.precio * ele.quanty, 0);

  return (
    <div className="cartTotal">
        <h4>
            Total a pagar: $ {total}
        </h4>
    </div>
  )
}

export default CartTotal