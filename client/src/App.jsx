import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Rent from './pages/Rent';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Contact from './pages/Contact'
import PropertyDetail from './components/PropertyDetail/PropertyDetail'
import Residences from './components/Residencies/Risidencies'
import About from './components/About/About'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'rent',
    element: <Rent />,
  },
  {
    path: 'buy',
    element: <Buy />,
  },
  {
    path: 'sell',
    element: <Sell />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/property/:id',
    element: <PropertyDetail />
  },
  {
    path: '/residencies/:id',
    element: <Residences />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
