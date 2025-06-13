import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import "../styles/layout.css";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
