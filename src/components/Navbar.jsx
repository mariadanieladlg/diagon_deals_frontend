import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#eee",
      }}
    >
      <Link to="/">Diagon Deals</Link>
      <input type="text" placeholder="Search magical items..." />
      <div className="nav-links" style={{ display: "flex", gap: "1rem" }}>
        <Link to="/support">Support</Link>
        <Link to="/account">Account</Link>
        <Link to="/checkout">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
