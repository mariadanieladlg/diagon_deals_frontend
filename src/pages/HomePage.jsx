import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div
        className="main-content"
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Sidebar />
        <div
          className="content-area"
          style={{
            flex: 1,
            padding: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h1>Welcome to Diagon Deals!</h1>
          <p>Explore magical items from the wizarding world 🧙🏽✨</p>
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
