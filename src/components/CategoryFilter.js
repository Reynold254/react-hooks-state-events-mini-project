import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  const categoryButtons = categories.map((category) => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => onCategoryClick(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
