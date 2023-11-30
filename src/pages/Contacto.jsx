import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("meqbbvkb");
  if (state.succeeded) {
      return <p className='text-center'>Gracias por tu mensaje</p>;
  }
  return (
    <div className='contacto'>
      <h1 className='contacto-titulo'>CONTACTANOS</h1>
      <h3 className='contacto-texto'>Nos encantaria saber sobre ti, ponte en contacto con nosotros</h3>
      <form className="contacto-formulario"onSubmit={handleSubmit}>
      <label className='contacto-texto' htmlFor="email"><strong>
        Direccion Email</strong>
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <h3 className='contacto-texto'>Deja tu mensaje</h3>
      <textarea 
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br />
      <button className="btn btn-primary" type="submit" disabled={state.submitting}>
        Submit
      </button>
      <br />
    </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;