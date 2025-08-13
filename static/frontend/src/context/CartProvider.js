
import { CartContext } from "./CartContext";
import React, { useState, useEffect } from "react";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

 const removeFromCart = (itemId) => {
 console.log("removeFromCart", itemId);
  const updatedCart = cartItems.filter((item) => item.id !== itemId);  
  setCartItems(updatedCart);
  // Update lo
  localStorage.setItem("cart", JSON.stringify(updatedCart));

};

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
