import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Items</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100">
              <img
                src={item.img}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-primary w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
