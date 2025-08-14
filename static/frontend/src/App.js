import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Card from "./pages/Card";
import AddItem from "./pages/AddItem";
import Checkout from "./pages/Checkout";
import Items from "./pages/Items";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/items" element={<Items />} />
        </Routes> 
      </Router>
     </CartProvider>
  );
}

export default App;
