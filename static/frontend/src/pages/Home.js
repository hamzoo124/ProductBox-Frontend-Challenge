import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 fst-italic text-black-50">Welcome to RandoStore</h1>
      <p className="mb-5 fst-italic text-black-50">Choose an action below to get started:</p>

      <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        <Link to="/items" className="btn btn-primary btn-lg d-flex align-items-center gap-2">
          {/* SVG for view items */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
            <path d="M8.982.324a.5.5 0 0 0-.964 0L6.5 3H2.5A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11A1.5 1.5 0 0 0 15 11.5v-7A1.5 1.5 0 0 0 13.5 3H9.5L8.982.324zM7 3.066 8 0l1 3.066V3h-2v.066zM2.5 4h11a.5.5 0 0 1 .5.5V5H2v-.5a.5.5 0 0 1 .5-.5zM2 6h12v5.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V6z"/>
          </svg>
          View All Items
        </Link>

        <Link to="/add-item" className="btn btn-success btn-lg d-flex align-items-center gap-2">
          {/* SVG for add item */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8.5v2.5a.5.5 0 0 1-1 0V8H5a.5.5 0 0 1 0-1h2.5V4.5A.5.5 0 0 1 8 4z"/>
          </svg>
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default Home;
