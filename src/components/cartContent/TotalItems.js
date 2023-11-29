import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const TotalItems = () => {
    const {cart} = useContext(dataContext);

    const itemsQuanty = cart.reduce((acc, ele) => acc + ele.quanty, 0 );
  return (
    <span className="bg-success text-white p-1">{itemsQuanty}</span>
  )
}

export default TotalItems