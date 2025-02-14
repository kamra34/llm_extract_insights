import React, { useEffect, useState } from "react";
import { fetchItems, createItem, deleteItem } from "./api";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

function App() {
    const [items, setItems] = useState([]);

    // Fetch items from the backend
    useEffect(() => {
        fetchItems()
            .then(response => setItems(response.data))
            .catch(err => console.error("Error fetching items:", err));
    }, []);

    // Add a new item
    const handleAddItem = (name) => {
        const newItem = { id: items.length + 1, name };
        createItem(newItem)
            .then(response => setItems([...items, response.data]))
            .catch(err => console.error("Error adding item:", err));
    };

    // Delete an item
    const handleDeleteItem = (id) => {
        deleteItem(id)
            .then(() => setItems(items.filter(item => item.id !== id)))
            .catch(err => console.error("Error deleting item:", err));
    };

    return (
        <div>
            <h1>React-FastAPI Integration</h1>
            <AddItemForm onAdd={handleAddItem} />
            <ItemList items={items} onDelete={handleDeleteItem} />
        </div>
    );
}

export default App;
