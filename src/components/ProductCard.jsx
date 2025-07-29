import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating} ⭐
      </p>
      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
      {product.tags && (
        <div style={{ marginTop: "0.5rem" }}>
          {product.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                background: "#e0e0e0",
                borderRadius: "6px",
                padding: "0.3rem 0.6rem",
                fontSize: "0.8rem",
                marginRight: "0.5rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
