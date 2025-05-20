import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", price: "", stock: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (Object.values(formData).every((field) => field !== "")) {
      setProducts([...products, { ...formData }]);
      setFormData({ name: "", description: "", price: "", stock: "" });
    }
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const editProduct = (index) => {
    const productToEdit = products[index];
    setFormData(productToEdit);
    deleteProduct(index);
  };

  return (
    <div className="container">
      {/* Formulario para agregar productos */}
      <div className="form">
        <h2>ADD PRODUCTS</h2>
        <div className="input-row">
          <div className="input-group">
            <label>NAME</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>DESCRIPTION</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>PRICE</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>STOCK</label>
            <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
          </div>
        </div>
        <button className="add-btn" onClick={addProduct}>PRODUCTS +</button>
      </div>

      {/* Tabla de productos */}
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
                <button className="edit-btn" onClick={() => editProduct(index)}>✏️</button>
                <button className="delete-btn" onClick={() => deleteProduct(index)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
