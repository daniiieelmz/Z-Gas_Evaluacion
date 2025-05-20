import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/productsPage/products"; // Asegurando que sea un componente válido

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Products />} /> {/* Llamando al componente correctamente */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
