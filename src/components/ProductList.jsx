import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ categoryFilter }) => { 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        const allProducts = response.data; 
        if (categoryFilter) {
          const filtered = allProducts.filter(
            (product) =>
              product.category &&
              product.category.trim().toLowerCase() === categoryFilter.trim().toLowerCase()
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
      .delete(`http://localhost:3001/products/${productId}`)
      .then(() => {
        setProducts((prev) => prev.filter((product) => product.id !== productId));
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  return (
    <div>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default ProductList;
