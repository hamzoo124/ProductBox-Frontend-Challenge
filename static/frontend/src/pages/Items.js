import React, { useState, useEffect, useContext } from "react";
import SearchAndSort from "../components/SearchAndSort/SearchAndSort";
import useSearchAndSort from "../utils/searchFilter";
import Card from "./Card";

import { CartContext } from "../context/CartContext";
import { fetchItems } from "../services/Api";

export const Item = () => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    getItems();
  }, []);

  const { searchTerm, setSearchTerm, sortOption, setSortOption, filteredData } = useSearchAndSort(items);

  return (
    <>
     <div className="col-12 text-center mb-4 mt-5 ">
        <h2 className="mb-4 w-50 m-auto fst-italic text-black-50">
          Explore Our Products
          <hr/>
        </h2>
      </div>
    <div className="container mt-4 shadow p-4">
      <SearchAndSort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <Card filteredData={filteredData} AddItem={addToCart} />
    </div>
    </>
  );
};

export default Item;
