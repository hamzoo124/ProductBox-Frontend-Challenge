import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../src/api/base_url";
import { CartContext } from "../../src/context/CartContext";


const Items = () => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/items`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const AddItem = (item) => {
    console.log("addtocart", item);
    addToCart(item)
    
    // Logic to add item to cart
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Items</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100">
               <img
           src={`${BASE_URL}/${item.img.replace(/^.\//, "")}`}
              className="card-img-top"
              alt={`${BASE_URL}/${item.name}`}
              style={{ height: "200px", objectFit: "cover" }}
            />
              <div className="card-body">
                {/* <h5 className="card-title">{item.img}</h5> */}
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-primary w-100" onClick={() => AddItem(item)}>
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
