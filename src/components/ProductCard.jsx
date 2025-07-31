import React from "react";

const ProductCard = ({ product, onDelete}) => {
  return (
    <div className="product-card">

        {product.image && (
        <img
          src={product.image}
          style={{ width: "150px", height: "150px", objectFit: "cover", marginBottom: "1rem" }}
        />
      )}

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

      <button
        onClick={() => onDelete(product.id)}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: "#3664c7ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
