import React, { Suspense } from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home  from "./pages/Home";
import Rent from "./pages/Rent"
import Contact from "./pages/Contact"
import Layout from "./components/Layout/Layout"
import PropertyDetail from "./components/PropertyDetail/PropertyDetail"
import Residiences from "./components/Residencies/Risidencies"
import About from "./pages/About"
import Buy from "./pages/Buy"
import Sell from "./pages/Sell"
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [{
    path: '/',
    element:<Layout />,
    children:[
       {path:"/", element:<Home />},
       {path:"rent", element:<Rent />},
       {path:"contact", element:<Contact />},
       {path:"property/:id", element:<PropertyDetail />},
       {path: "/residencies/:id", element : <Residiences/>} ,
       {path: "/about", element : <About/>} ,
       {path: "/sell", element : <Sell/>} ,
       {path: "/buy", element : <Buy/>} ,
    ],
  },]
);
 
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router = {router} />
    </Suspense>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
