import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BASE_URL } from "../api/base_url";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const { removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFrom = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    console.log("removeFromCart", itemId);

    removeFromCart(itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQty = (itemId) => {
    incrementQuantity(itemId);
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrementQty = (itemId) => {
    decrementQuantity(itemId);
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }  
          : item
      )
    );
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty.
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="list-group mb-3">
              {/* Header Row */}
              <div className="list-group-item d-flex justify-content-between align-items-center fw-bold text-uppercase">
                <div className="d-flex align-items-center ">
                  <span className="ms-2">Image</span>
                  <span className="ms-5">Product Name</span>
                </div>
                <span className="text-center">Price</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Remove</span>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center w-25">
                    <img
                      src={`${BASE_URL}/${item.img.replace(/^.\//, "")}`}
                      alt={item.name}
                      className="w-50 h-25"
                    />
                    <div className="ms-3">{item.name}</div>
                  </div>
                  <div className="text-center">${item.price}</div>
                  <div className="text-center">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => decrementQty(item.id)}         
                    >
                      -
                    </button>

                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => incrementQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFrom(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                <p className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <strong>
                    $
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Shipping:</span>
                  <strong>$0.00</strong>
                </p>
                <hr />
                <h5 className="d-flex justify-content-between">
                  <span>Total:</span>
                  <strong>
                    $
                    {cart
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </strong>
                </h5>
                <button className="btn btn-warning w-100 mt-3">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
