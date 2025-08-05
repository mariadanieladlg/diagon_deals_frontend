import React from "react";

const ProductCard = ({ product, onDelete, onEdit }) => {
  console.log(product.image);
  return (
    <div className="product-card">
      <img
        src={product.image}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />

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
          width: "80px",
          padding: "0.3rem 0.5rem",
          background: "#d85466ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.85rem",
          marginRight: "10px",
          marginTop: "10px",
          flex: 1,
        }}
      >
        Delete
      </button>

      <button
        onClick={() => onEdit(product)}
        style={{
          width: "80px",
          padding: "0.3rem 0.5rem",
          background: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.85rem",
          flex: 1,
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default ProductCard;
