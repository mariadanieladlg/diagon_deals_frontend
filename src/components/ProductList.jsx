import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductList = ({ categoryFilter }) => {
  const [products, setProducts] = useState([]);
  console.log(import.meta.env.VITE_JSONSERVER_URL);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_JSONSERVER_URL}/products`)
      .then((response) => {
        const allProducts = response.data;
        if (categoryFilter) {
          const filtered = allProducts.filter(
            (product) =>
              product.category &&
              product.category.trim().toLowerCase() ===
                categoryFilter
                  .trim()
                  .replace(/^[^\w]+/, "")
                  .toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(allProducts);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [categoryFilter]);

  const handleDelete = (productId) => {
    axios
      .delete(`${import.meta.env.VITE_JSONSERVER_URL}/products/${productId}`)
      .then(() => {
        setProducts((prev) =>
          prev.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const navigate = useNavigate();

  const handleEdit = (product) => {
    navigate(`/edit/${product.id}`);
  };

  return (
    <div>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
