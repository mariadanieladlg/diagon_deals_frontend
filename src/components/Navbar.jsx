import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/diagon-deals-store.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Diagon Deals Store" className="logo-img" />
      </Link>

      <div className="nav-links">
        <Link to="/support">Support</Link>
        <Link to="/account">Account</Link>
        <Link to="/add-product">
          <button>➕ Add Product</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
