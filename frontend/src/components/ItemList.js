import React from "react";

const ItemList = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
