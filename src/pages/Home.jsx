import React from "react";
import Busqueda from "../components/SearchBar";
const Home = () => {
    return (
        <main className="contenido">
        <div className="container">
            <h2 className="subtitulo">Nuestros Productos</h2>
            <Busqueda />
            
            <nav>
                <ul className="contenido-cursos">
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                    <li className="contenido-cursos-link"><a>1</a></li>
                </ul>
            </nav>
        </div>
    </main>
    )
  }
  
  export default Home;