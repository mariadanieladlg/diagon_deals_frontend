import React from "react";

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div
      className="product-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        padding: "1.5rem",
        backgroundColor: "#fef7e5",
        border: "3px solid #d6c5a5",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(60, 40, 20, 0.2)",
      }}
    >
      {/* Image Showcase */}
      <div
        style={{
          backgroundColor: "#f4ead3",
          border: "3px double #5b3a29",
          borderRadius: "12px",
          padding: "0.5rem",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Text Details */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem",
            color: "#5b3a29",
            marginBottom: "0.5rem",
          }}
        >
          {product.title}
        </h3>

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
                  borderRadius: "12px",
                  padding: "0.3rem 0.6rem",
                  fontSize: "0.85rem",
                  marginRight: "0.5rem",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => onDelete(product.id)}
            style={{
              width: "80px",
              padding: "0.3rem 0.5rem",
              background: "#d85466",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.85rem",
              marginRight: "10px",
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
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
