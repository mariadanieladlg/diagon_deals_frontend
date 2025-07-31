import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:3001/products/${productId}`)
      .then(() => {
        setProducts((prev) => prev.filter((product) => product.id !== productId));
      })
      .catch((error) => console.error("Error deleting product:", error));
  };


  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;
