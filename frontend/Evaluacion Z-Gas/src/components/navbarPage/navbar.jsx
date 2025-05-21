import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Imagen grande en la izquierda total (estática) */}
      <img src="/src/img/zGas.jpg" alt="Home" className="nav-logo" />

      {/* Secciones con navegación */}
      <div className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <img src="/src/img/Stock.png" alt="Products" className="nav-icon" />
          <span className="nav-text">PRODUCTS</span>
        </NavLink>
      </div>

      <div className="nav-item">
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <img src="/src/img/Users.png" alt="Employees" className="nav-icon" />
          <span className="nav-text">EMPLOYEES</span>
        </NavLink>
      </div>

      <div className="nav-item">
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <img src="/src/img/Users.png" alt="Customers" className="nav-icon" />
          <span className="nav-text">CUSTOMERS</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
