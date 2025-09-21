// src/routes.jsx
import App from '../../App.jsx';


export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element:"" },
      { path: '/products', element:"" },
      { path: '/games', element:""  },
      { path: '/contact', element: "" },
      { path: '/cart', element: "" },
    ],
  },
];
