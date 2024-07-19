import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        
        <Header/>
        <div style = {{minHeight: "calc(100vh - 200px)"}}>
        <Outlet/>
        </div>
        <Footer />
    </>
  );
};

export default Layout;
