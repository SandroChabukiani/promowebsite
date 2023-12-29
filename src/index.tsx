import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShopContextProvider } from './context/shop-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

