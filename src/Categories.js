import React from 'react';

const Categories = ({ categories, filterItems }) => {
    // console.log(categories);
  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterItems(categories)}
      >
        {categories}
      </button>
    </div>
  );
};

export default Categories;