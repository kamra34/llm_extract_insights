import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
    const [newItem, setNewItem] = useState("");

    const handleAdd = () => {
        if (newItem.trim()) {
            onAdd(newItem);
            setNewItem(""); // Clear input field
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="New item name"
            />
            <button onClick={handleAdd}>Add Item</button>
        </div>
    );
};

export default AddItemForm;
