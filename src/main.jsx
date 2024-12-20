import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ProductProvider } from './context/productContext.jsx';
import { BasketProvider } from './context/basketContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <BasketProvider>
        <App />
        <ToastContainer />
      </BasketProvider>
    </ProductProvider>
  </React.StrictMode>

);
