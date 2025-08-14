// src/hooks/useSearchAndSort.js
import { useState, useMemo } from "react";

export default function useSearchAndSort(data, searchKey = "name") {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredData = useMemo(() => {
    return data
      .filter((item) =>
        item[searchKey]?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === "name-asc") return a.name.localeCompare(b.name);
        if (sortOption === "name-desc") return b.name.localeCompare(a.name);
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        return 0;
      });
  }, [data, searchTerm, sortOption, searchKey]);

  return {
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filteredData,
  };
}
