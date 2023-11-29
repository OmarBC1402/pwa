import React, { useContext } from "react";
import Busqueda from "../components/SearchBar";
import Products from "../components/products/Products";
import Resultados from "../components/products/Resultados";
import { dataContext } from "../components/context/DataContext";

const Home = () => {
  const { searchResults } = useContext(dataContext);

  return (
    <main className="contenido">
      <div className="container">
        <h2 className="subtitulo">Nuestros Productos</h2>
        <Busqueda />
        {searchResults.length > 0 ? (
          // Si hay resultados de búsqueda, muestra el componente Resultados
          <Resultados />
        ) : (
          // Si no hay resultados de búsqueda, muestra el componente Products
          <Products />
        )}
      </div>
    </main>
  );
};

export default Home;