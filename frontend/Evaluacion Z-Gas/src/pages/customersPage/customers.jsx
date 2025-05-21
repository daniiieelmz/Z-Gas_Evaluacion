import React, { useState } from "react";
import "./Customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      address: "123 Main St",
      city: "New York",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-5678",
      address: "456 Park Ave",
      city: "San Francisco",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-8765",
      address: "789 Elm St",
      city: "Chicago",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addCustomer = () => {
    if (Object.values(formData).some((field) => field === "")) {
      setErrorMessage("FILL IN ALL FIELDS");
      return;
    }
    setCustomers([...customers, { ...formData }]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    });
    setErrorMessage("");
  };

  const deleteCustomer = (index) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  const editCustomer = (index) => {
    setEditingIndex(index);
    setFormData(customers[index]);
  };

  const saveEdit = () => {
    const updatedCustomers = [...customers];
    updatedCustomers[editingIndex] = formData;
    setCustomers(updatedCustomers);
    setEditingIndex(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    });
  };

  return (
    <div className="customers-page">
      <h2>ADD CUSTOMERS</h2>
      
      {/* Formulario idéntico al de Products */}
      <div className="form-container">
        <div className="input-row">
          <div className="input-group">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>PHONE</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>ADDRESS</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>CITY</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="add-btn"
          onClick={editingIndex !== null ? saveEdit : addCustomer}
        >
          {editingIndex !== null ? "SAVE" : "ADD CUSTOMER"}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      {/* Tabla de Customers */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>CITY</th>
            <th>SET UP</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>
                <button className="edit-btn" onClick={() => editCustomer(index)}>
                  ✏️
                </button>
                <button className="delete-btn" onClick={() => deleteCustomer(index)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
