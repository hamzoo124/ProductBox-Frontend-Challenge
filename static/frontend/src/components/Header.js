import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="d-flex justify-content-between align-items-center container">
        {/* Store Name */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          RandoStore
        </Link>

        {/* Static Cart */}
      <Link
  to="/checkout"
  className="btn btn-outline-light position-relative"
>
  {/* Cart SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-cart"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM3.14 6l1.25 6.5H13l1.25-6.5H3.14zM5.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>

  {/* Cart Count Badge */}
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartItems.length}
    <span className="visually-hidden">items in cart</span>
  </span>
</Link>

      </div>
    </nav>
  );
};

export default Header;
