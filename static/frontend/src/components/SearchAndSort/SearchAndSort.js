// src/components/SearchAndSort.js
import React from "react";

const SearchAndSort = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => {
  return (
    <div className="d-flex gap-3 mb-4 justify-content-between">
      <input
        type="text"
        placeholder="Search items..."
        className="form-control"
        style={{ maxWidth: "300px" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="form-select"
        style={{ maxWidth: "200px" }}
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Sort By</option>
       
        <option value="price-asc">Price (Low → High)</option>
        <option value="price-desc">Price (High → Low)</option>
      </select>
    </div>
  );
};

export default SearchAndSort;
