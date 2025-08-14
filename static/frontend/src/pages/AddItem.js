import React, { useState } from "react";
import { BASE_URL } from "../api/base_url";

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure price is stored as a number
    if (name === "price") {
      setFormData({ ...formData, [name]: value === "" ? "" : Number(value) });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add item");

      const data = await res.json();
      console.log("Item added:", data);

      setFormData({ name: "", price: "", img: "" });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container mt-5 w-25">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add New Item
      </h2>
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
          onMouseOver={(e) => (e.target.style.background = "#45a049")}
          onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
