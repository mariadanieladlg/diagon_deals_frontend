import React from "react";

const Sidebar = () => {
  const categories = [
    "Magical Pet Market",
    "Wand Shop",
    "Flying Brooms",
    "Potion Store",
    "Spellbooks and Magic",
    "Magical Artifacts Catalog",
    "House Starter Packs",
  ];

  return (
    <aside
      className="sidebar"
      style={{ width: "200px", padding: "1rem", background: "#f9f9f9" }}
    >
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
