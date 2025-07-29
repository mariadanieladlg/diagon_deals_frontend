import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Diagon Deals
      </Link>

      <input
        type="text"
        placeholder="Search magical items..."
        className="navbar-search"
      />

      <div className="nav-links">
        <Link to="/support">Support</Link>
        <Link to="/account">Account</Link>
        <Link to="/checkout">Cart</Link>
        <Link to="/add-product">
          <button>➕ Add Product</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
