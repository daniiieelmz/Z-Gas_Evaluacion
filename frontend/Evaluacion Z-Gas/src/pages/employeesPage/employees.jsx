import React, { useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      name: "John",
      lastName: "Doe",
      birthday: "1980-01-01",
      email: "john@example.com",
      address: "123 Main St",
      password: "pass123",
      hireDate: "2020-05-10",
      telephone: "5551234",
      dui: "A12345678",
      isVerified: "true",
      issnumber: "001",
    },
    {
      name: "Jane",
      lastName: "Smith",
      birthday: "1985-07-12",
      email: "jane@example.com",
      address: "456 Park Ave",
      password: "secret456",
      hireDate: "2019-11-05",
      telephone: "5555678",
      dui: "B87654321",
      isVerified: "false",
      issnumber: "002",
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    address: "",
    password: "",
    hireDate: "",
    telephone: "",
    dui: "",
    isVerified: "",
    issnumber: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función de validación: comprueba que los campos obligatorios tengan datos y cumplan sus formatos
  const validateForm = () => {
    const errors = [];
    if (formData.name.trim() === "") {
      errors.push("El campo NAME es obligatorio");
    }
    if (formData.lastName.trim() === "") {
      errors.push("El campo LAST NAME es obligatorio");
    }
    if (formData.birthday.trim() === "") {
      errors.push("El campo BIRTHDAY es obligatorio");
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.birthday)) {
      errors.push("BIRTHDAY debe tener formato YYYY-MM-DD (con guiones)");
    }
    if (formData.email.trim() === "") {
      errors.push("El campo EMAIL es obligatorio");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("EMAIL no tiene un formato válido");
    }
    if (formData.address.trim() === "") {
      errors.push("El campo ADDRESS es obligatorio");
    }
    if (formData.password.trim() === "") {
      errors.push("El campo PASSWORD es obligatorio");
    }
    if (formData.hireDate.trim() === "") {
      errors.push("El campo HIRE DATE es obligatorio");
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.hireDate)) {
      errors.push("HIRE DATE debe tener formato YYYY-MM-DD (con guiones)");
    }
    if (formData.telephone.trim() === "") {
      errors.push("El campo TELEPHONE es obligatorio");
    } else if (!/^\d+$/.test(formData.telephone)) {
      errors.push("TELEPHONE debe contener solo números");
    }
    if (formData.dui.trim() === "") {
      errors.push("El campo DUI es obligatorio");
    }
    if (formData.isVerified.trim() === "") {
      errors.push("El campo IS VERIFIED es obligatorio");
    } else if (
      formData.isVerified.toLowerCase() !== "true" &&
      formData.isVerified.toLowerCase() !== "false"
    ) {
      errors.push("IS VERIFIED debe ser 'true' o 'false'");
    }
    if (formData.issnumber.trim() === "") {
      errors.push("El campo ISSNUMBER es obligatorio");
    } else if (!/^\d+$/.test(formData.issnumber)) {
      errors.push("ISSNUMBER debe contener solo números");
    }
    return errors;
  };

  const addEmployee = () => {
    const errors = validateForm();
    if (errors.length > 0) {
      setErrorMessage(errors.join(". "));
      return;
    }
    setEmployees([...employees, { ...formData }]);
    setFormData({
      name: "",
      lastName: "",
      birthday: "",
      email: "",
      address: "",
      password: "",
      hireDate: "",
      telephone: "",
      dui: "",
      isVerified: "",
      issnumber: "",
    });
    setErrorMessage("");
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const editEmployee = (index) => {
    setEditingIndex(index);
    setFormData(employees[index]);
  };

  const saveEdit = () => {
    const errors = validateForm();
    if (errors.length > 0) {
      setErrorMessage(errors.join(". "));
      return;
    }
    const updatedEmployees = [...employees];
    updatedEmployees[editingIndex] = formData;
    setEmployees(updatedEmployees);
    setEditingIndex(null);
    setFormData({
      name: "",
      lastName: "",
      birthday: "",
      email: "",
      address: "",
      password: "",
      hireDate: "",
      telephone: "",
      dui: "",
      isVerified: "",
      issnumber: "",
    });
    setErrorMessage("");
  };

  return (
    <div className="employees-page">
      <h2>ADD EMPLOYEES</h2>
      
      <div className="form-container">
        <div className="input-rows">
          {/* Primera fila con 6 inputs: NAME, LAST NAME, BIRTHDAY, EMAIL, ADDRESS, PASSWORD */}
          <div className="input-row row-1">
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
              <label>LAST NAME</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>BIRTHDAY</label>
              <input 
                type="text" 
                name="birthday" 
                value={formData.birthday} 
                onChange={handleChange} 
                placeholder="YYYY-MM-DD"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
            <div className="input-group">
              <label>EMAIL</label>
              <input 
                type="text" 
                name="email" 
                value={formData.email} 
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
              <label>PASSWORD</label>
              <input 
                type="text" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
              />
            </div>
          </div>
          {/* Segunda fila con 5 inputs: HIRE DATE, TELEPHONE, DUI, IS VERIFIED, ISSNUMBER */}
          <div className="input-row row-2">
            <div className="input-group">
              <label>HIRE DATE</label>
              <input 
                type="text" 
                name="hireDate" 
                value={formData.hireDate} 
                onChange={handleChange} 
                placeholder="YYYY-MM-DD"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
            <div className="input-group">
              <label>TELEPHONE</label>
              <input 
                type="text" 
                name="telephone" 
                value={formData.telephone} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>DUI</label>
              <input 
                type="text" 
                name="dui" 
                value={formData.dui} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>IS VERIFIED</label>
              <input 
                type="text" 
                name="isVerified" 
                value={formData.isVerified} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>ISSNUMBER</label>
              <input 
                type="text" 
                name="issnumber" 
                value={formData.issnumber} 
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>
        <button className="add-btn" onClick={editingIndex !== null ? saveEdit : addEmployee}>
          {editingIndex !== null ? "SAVE" : "ADD EMPLOYEE"}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>LAST NAME</th>
            <th>BIRTHDAY</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>PASSWORD</th>
            <th>HIRE DATE</th>
            <th>TELEPHONE</th>
            <th>DUI</th>
            <th>IS VERIFIED</th>
            <th>ISSNUMBER</th>
            <th>SET UP</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.birthday}</td>
              <td>{employee.email}</td>
              <td>{employee.address}</td>
              <td>{employee.password}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.telephone}</td>
              <td>{employee.dui}</td>
              <td>{employee.isVerified}</td>
              <td>{employee.issnumber}</td>
              <td>
                <button className="edit-btn" onClick={() => editEmployee(index)}>✏️</button>
                <button className="delete-btn" onClick={() => deleteEmployee(index)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
