import React from "react";

const Sidebar = ({ onCategorySelect, selectedCategory }) => {
  const categories = [
    "🐾 Magical Pet Market",
    "🪄 Wand Shop",
    "🧹 Flying Brooms",
    "🧪 Potion Store",
    "📖 Spellbooks and Magic",
    "🧿 Magical Artifacts Catalog",
    "🎓 House Starter Packs",
  ];

  return (
    <aside className="sidebar">
      <h3>📚 Magical Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onCategorySelect(cat)}
            className={selectedCategory === cat ? "selected" : ""}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
