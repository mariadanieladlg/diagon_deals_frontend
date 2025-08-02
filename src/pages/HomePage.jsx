import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  
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
        <Sidebar 
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        />
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
          <ProductList categoryFilter={selectedCategory}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
