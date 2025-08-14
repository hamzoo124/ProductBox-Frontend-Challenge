import React from "react";
import { BASE_URL } from "../api/base_url";
import "../components/style/item.css";

const Card = ({ filteredData, AddItem }) => {
  return (
    <div className="row">
      {filteredData.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <div className="card h-100 shadow-sm border-0">
            <div className="overflow-hidden h-100">
              <img
                src={
                  item.img.startsWith("http")
                    ? item.img
                    : `${BASE_URL}/${item.img.replace(/^.\//, "")}`
                }
                className="card-img-top w-100 h-100"
                style={{ objectFit: "cover" }}
                alt={item.name}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{item.name}</h5>
              <p className="card-text text-success fs-5 fw-semibold">
                ${item.price}
              </p>
              <button
                className="btn btn-primary w-100 rounded-pill fw-semibold"
                onClick={() => AddItem(item)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {filteredData.length === 0 && (
        <p className="text-center text-muted">No items found.</p>
      )}
    </div>
  );
};

export default Card;
