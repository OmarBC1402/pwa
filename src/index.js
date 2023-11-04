import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Auth0Provider 
    domain="dev-q5kbjn4cqejva0hc.us.auth0.com" 
    clientId="9aepWrI8icDkbB9UFYQlcR3wC2fYViWq" 
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
);


