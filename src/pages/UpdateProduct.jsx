import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    tags: "",
    image: "",
  });

  const [error, setError] = useState("");

  const categories = [
    "Magical Pet Market",
    "Wand Shop",
    "Flying Brooms",
    "Potion Store",
    "Spellbooks and Magic",
    "Magical Artifacts Catalog",
    "House Starter Packs",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        const product = response.data;
        setFormData({
          ...product,
          tags: product.tags.join(", "),
          image: product.image || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.title || !formData.price || !formData.category) {
      setError("Title, price, and category are required.");
      return;
    }

    const updatedProduct = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating),
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      await axios.put(`http://localhost:3001/products/${id}`, updatedProduct);
      alert("✅ Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Something went wrong while updating the product.");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Update Product</h2>
        {error && (
          <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
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
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                marginTop: "1rem",
              }}
              onError={(e) => (e.target.style.display = "none")}
            />
          )}

          <div style={{ marginTop: "1rem" }}>
            <button type="submit" style={{ marginRight: "1rem" }}>
              Update Product
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateProduct;
