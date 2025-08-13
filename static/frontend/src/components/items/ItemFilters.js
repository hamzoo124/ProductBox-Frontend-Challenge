import React from "react";

const ItemFilters = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-2">
      {/* Search Input */}
      <input
        type="text"
        className="form-control w-100 w-md-50"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sort Dropdown */}
      <select
        className="form-select w-50 w-md-25"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default ItemFilters;
