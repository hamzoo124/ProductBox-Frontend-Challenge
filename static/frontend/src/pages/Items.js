import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../src/api/base_url";
import { CartContext } from "../../src/context/CartContext";
import useSearchAndSort from "../utils/searchFilter";
import "./item.css";

const Items = () => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  const {
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filteredData: filteredItems,
  } = useSearchAndSort(items, "name");

  useEffect(() => {
    fetch(`${BASE_URL}/items`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const AddItem = (item) => {
    addToCart(item);
  };

  return (
    <div className="container mt-4 shadow p-4">
      <div className="d-flex gap-3 mb-4 d-flex justify-content-between">
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

      {/* Items List */}
      <div className="row">
  {filteredItems.map((item) => (
    <div className="col-md-4 mb-4" key={item.id}>
      <div className="custom-card card h-100 shadow-sm border-0">
        <div className="img-container">
          <img
            src={
              item.img.startsWith("http")
                ? item.img
                : `${BASE_URL}/${item.img.replace(/^.\//, "")}`
            }
            className="card-img-top"
            alt={item.name}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{item.name}</h5>
          <p className="card-text text-success fs-5 fw-semibold">
            ${item.price}
          </p>
          <button
            className="btn btn-primary w-100 rounded-pill fw-semibold"
            onClick={() => AddItem(item)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
  {filteredItems.length === 0 && (
    <p className="text-center text-muted">No items found.</p>
  )}
</div>

    </div>
  );
};

export default Items;
