import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Resultados = () => {
  const { data, buyProducts, searchResults } = useContext(dataContext);

  // Utiliza searchResults si está presente; de lo contrario, utiliza todos los productos (data)
  const productsToDisplay = searchResults && searchResults.length > 0 ? searchResults : data;

  return (
    <div>
      {productsToDisplay.length > 0 ? (
        <ul className="contenido-cursos">
          {productsToDisplay.map((product) => (
            <li className="contenido-cursos-link" key={product.id}>
              <img className="imagen-producto" src={product.img} alt={product.nombre} width="150" height="150" />
              <h3>{product.nombre}</h3>
              <h4>${product.precio}</h4>
              <button onClick={() => buyProducts(product)} className="boton-añadir">
                Añadir al carrito
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Resultados;