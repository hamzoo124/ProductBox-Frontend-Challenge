import { BASE_URL } from "../api/base_url";

// Fetch all items
export const fetchItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/items`);
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};


export const addItem = async (itemData) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });

    if (!response.ok) throw new Error("Failed to add item");
    return await response.json();
    
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
