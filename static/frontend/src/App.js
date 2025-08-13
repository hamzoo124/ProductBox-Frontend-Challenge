import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Checkout from "./pages/Checkout";

function App() {
  return (
    // <CartProvider>
      <Router>
        <Header />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Routes> 
      </Router>
    // </CartProvider>
  );
}

export default App;
