import React, { useState } from "react";
import { addItem } from "../services/Api";
import { useNavigate } from "react-router-dom";


const AddItemForm = () => {
  const navigate=useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addItem(formData);
    if (data) {
      console.log("Item added:", data);
      setFormData({ name: "", price: 0, img: "" });
      navigate("/items");
      
    } else {
      console.error("Failed to add item");
    }
  };

  return (
    <div className="container mt-5 w-25">
      <h2 className="text-center mb-3">Add New Item</h2>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 bg-light p-4 rounded shadow-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter item name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
        />
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
          required
          className="form-control"
        />
        <input
          type="text"
          name="img"
          placeholder="Enter image URL"
          value={formData.img}
          onChange={handleChange}
          required
          className="form-control"
        />
        <button
          type="submit"
          className="btn btn-success w-50 d-block m-auto"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
