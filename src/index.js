import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 için gerekli yöntem
import App from './App'; // App.js dosyasını içe aktarıyoruz

// React uygulamasını root elementine bağlama
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
