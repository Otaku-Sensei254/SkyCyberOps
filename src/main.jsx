import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Blog from "./pages/Blog.jsx";
import Services from "./pages/Services.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
