import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="main-content" style={{ display: "flex" }}>
        <Sidebar />
        <div className="content-area" style={{ padding: "1rem" }}>
          <h1>Welcome to Diagon Deals!</h1>
          <p>Explore magical items from the wizarding world.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
