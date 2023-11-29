import Tienda from "../tienda.webp";
import Tienda2 from "../tienda2.jpeg";

const Conocenos = () => {
  return (
    <>
    <h1 className="text-center">ACERCA DE AGROINSUMOS</h1>
    <br />
      <div className="Contenedor-Conocenos container-fluid row ">
        <div className="Historia">
          <h2 className="subtitulo">Nuestra Historia</h2>
          <br/>
          <p className="texto">
            AgroInsumos tuvo su humilde comienzo en 2015 cuando Juan Carlos Castro López, un apasionado agricultor y químico, fundó la empresa en una pequeña instalación en el corazón de una comunidad agrícola. Juan tenía una visión clara: proporcionar a los agricultores productos químicos de alta calidad y asesoramiento técnico para mejorar la productividad de sus cultivos. Durante esos primeros años, AgroInsumos se centró en la producción y venta de fertilizantes y herbicidas, estableciendo relaciones sólidas con los agricultores locales.
          </p>
          <img src={Tienda} alt="tienda" width="200" className="" />
          <br/>
        </div>
        <div className="Historia ">
          <h2 className="subtitulo">Nuestra Misión</h2>
          <br/>
          <p className="texto">
            Potenciar Ia productividad y sostenibilidad agrícola, proporcionando semillas de alta calidad, fertilizantes especializados a nuestros clientes en el sector agropecuario. Estamos comprometidos con su éxito y el crecimiento de sus cultivos. 
          </p>
          <img src={Tienda2} alt="tienda" width="200" className="" />
        </div>
          <div className="Historia ">
            <h2 className="subtitulo">¿Qué nos diferencia?</h2>
            <br/>
            <p className="texto">
            <ul>
              <li>Productos Específicos y Especializado</li>
              <li>Asesoramiento Técnico</li>
              <li>Certificaciones y Garantías de Calidad</li>
              <li>Red de Distribución Eficiente</li>
              <li>Compromiso con la Comunidad Local</li>
            </ul>
            </p>
            
          </div>
      </div>
    </>
  )
}



export default Conocenos;