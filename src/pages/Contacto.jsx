const Contacto = () => {
  return (
    <div className="contacto">
      <h1 className="contacto-titulo">Contáctanos</h1>
      <p className="contacto-texto">¡Nos encantaría saber de ti! Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
      
      <h2 className="contacto-subtitulo">Información de Contacto</h2>
      <p className="contacto-info">
        Teléfono: (421) 106-7909<br />
        Correo Electrónico: infoAgroInsumos@gmail.com
      </p>

      <h2 className="contacto-subtitulo">Formulario de Contacto</h2>
      <form className="contacto-formulario">
        <div className="contacto-campo">
          <label htmlFor="nombre" className="contacto-label">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="contacto-input" />
        </div>
        <div className="contacto-campo">
          <label htmlFor="email" className="contacto-label">Correo Electrónico:</label>
          <input type="email" id="email" name="email" className="contacto-input" />
        </div>
        <div className="contacto-campo">
          <label htmlFor="mensaje" className="contacto-label">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" className="contacto-textarea"></textarea>
        </div>
        <button type="submit" className="contacto-boton">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;
