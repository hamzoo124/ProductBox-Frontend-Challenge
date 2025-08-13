import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemList = ({ filteredItems }) => {
  const { addToCart } = useContext(CartContext);

  if (filteredItems.length === 0) {
    return <p className="text-center">No items found.</p>;
  }

  return (
    <div className="row">
      {filteredItems.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <div className="card h-100 shadow-sm">
            <img
           src={`${BASE_URL}/${item.img.replace(/^.\//, "")}`}
              className="card-img-top"
              alt={`${BASE_URL}/${item.name}`}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">${item.price}</p>
              <button
                className="btn btn-primary mt-auto"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
