import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Products = () => {
    const { data, buyProducts } = useContext(dataContext);
    


    return data.map((product)=> {
  return (
    <li className="contenido-cursos-link" key={product.id}>
        <img className="imagen-producto" src={product.img} alt={product.nombre} width="150" height="150"/>
        <h3>{product.nombre} </h3>
        <h4>${product.precio} </h4>
        <button onClick={ ()=> buyProducts(product)} className="boton-añadir">Añadir al carrito</button>
    </li>
    )
    })
}

export default Products