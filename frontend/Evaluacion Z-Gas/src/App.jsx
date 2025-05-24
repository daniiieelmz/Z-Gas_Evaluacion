import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbarPage/navbar"; // Navbar global
import Products from "./pages/productsPage/products";   // Página de productos
import Customers from "./pages/customersPage/Customers"; // Página de clientes
import Employees from "./pages/employeesPage/employees"; // Importando Employees

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/employees" element={<Employees />} /> {/* Ruta para Employees */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
