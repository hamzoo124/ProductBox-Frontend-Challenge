import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to RandoStore</h1>
      <p className="mb-5">Choose an action below to get started:</p>

      <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
        {/* Button to Items Page */}
        <Link to="/items" className="btn btn-primary btn-lg">
          View All Items
        </Link>

        {/* Button to Add Item Page */}
        <Link to="/add-item" className="btn btn-success btn-lg">
          Add New Item
        </Link>

        {/* Button to Checkout Page */}
        <Link to="/checkout" className="btn btn-warning btn-lg text-dark">
          View Cart / Checkout
        </Link>
      </div>
    </div>
  );
};

export default Home;
