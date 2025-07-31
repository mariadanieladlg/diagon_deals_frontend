import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    tags: "",
  });

  const navigate = useNavigate();

  const categories = [
  "Magical Pet Market",
  "Wand Shop",
  "Flying Brooms",
  "Potion Store",
  "Spellbooks and Magic",
  "Magical Artifacts Catalog",
  "House Starter Packs"
];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating),
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      await axios.post("http://localhost:3001/products", newProduct);
      alert("Product added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Add a New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />
          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            required
          />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
                {categories.map((cat) => (
                <option key={cat} value={cat}>
                {cat}
                </option>
                ))}
              </select>

          
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            required
          />
          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Rating"
            onChange={handleChange}
            required
          />
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            onChange={handleChange}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddProduct;
