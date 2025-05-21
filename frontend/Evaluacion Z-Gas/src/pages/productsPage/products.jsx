import React, { useState } from "react";
import Navbar from "../../components/navbarPage/navbar"; // Ajusta la ruta si es necesario
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([
    { name: "Tambo", description: "Mediano", price: "9", stock: "50" },
    { name: "Tambo", description: "Grande", price: "12", stock: "30" },
    { name: "Tambo", description: "Pequeño", price: "6", stock: "15" }
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "", price: "", stock: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (Object.values(formData).some((field) => field === "")) {
      setErrorMessage("FILL IN ALL FIELDS");
      return;
    }

    setProducts([...products, { ...formData }]);
    setFormData({ name: "", description: "", price: "", stock: "" });
    setErrorMessage("");
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const editProduct = (index) => {
    setEditingIndex(index);
    setFormData(products[index]);
  };

  const saveEdit = () => {
    const updatedProducts = [...products];
    updatedProducts[editingIndex] = formData;
    setProducts(updatedProducts);
    setEditingIndex(null);
    setFormData({ name: "", description: "", price: "", stock: "" });
  };

  return (
    <div className="products-page">
      <Navbar /> {/* Navbar situado arriba, ocupando toda la pantalla de ancho */}

      <h2>ADD PRODUCTS</h2>

      {/* Formulario */}
      <div className="form-container">
        <div className="input-row">
          {["name", "description", "price", "stock"].map((field) => (
            <div className="input-group" key={field}>
              <label>{field.toUpperCase()}</label>
              <input type={field === "price" || field === "stock" ? "number" : "text"} name={field} value={formData[field]} onChange={handleChange} />
            </div>
          ))}
        </div>
        <button className="add-btn" onClick={editingIndex !== null ? saveEdit : addProduct}>PRODUCTS +</button>

        {/* Alerta si faltan campos */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      {/* Tabla más abajo */}
      <table className="product-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>SET UP</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="edit-btn" onClick={() => editProduct(index)}> <img src="/src/img/Edit.png" /> </button>
                <button className="delete-btn" onClick={() => deleteProduct(index)}> < img src="/src/img/Delete.png" /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
