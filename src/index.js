import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18/en.json';
import es from './i18/es.json';


i18next.use(initReactI18next)
.init({
  lng:'es',
  nsSeparator: '::', // Agrega esta línea con el separador correcto si lo cambiaste
  interpolation: {
    escapeValue: false,
  },
  resources:{
    en:{
      translation:en
    },
    es:{
      translation:es
    }
  }
})


/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <i18nextProvider i18next={i18next}>
    <Auth0Provider 
    domain="dev-q5kbjn4cqejva0hc.us.auth0.com" 
    clientId="9aepWrI8icDkbB9UFYQlcR3wC2fYViWq" 
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
    </i18nextProvider>
    </BrowserRouter>
);


