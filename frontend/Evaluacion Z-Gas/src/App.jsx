import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbarPage/navbar"; // Asegúrate de que la ruta del Navbar es correcta
import Products from "./pages/productsPage/products";   // Componente de productos
import Customers from "./pages/customersPage/customers"; // Importa el componente Customers

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
