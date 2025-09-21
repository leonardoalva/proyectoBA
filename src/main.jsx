// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CartProvider from './context/CartProvider.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../src/components/Routes/Routes.jsx';

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
