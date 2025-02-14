// import axios from 'axios';

// const API_BASE_URL = "http://localhost:8000"; // Backend API URL

// // Fetch all items
// export const fetchItems = () => {
//     return axios.get(`${API_BASE_URL}/items`);
// };

// // Create a new item
// export const createItem = (item) => {
//     return axios.post(`${API_BASE_URL}/items`, item);
// };

// // Delete an item by ID
// export const deleteItem = (id) => {
//     return axios.delete(`${API_BASE_URL}/items/${id}`);
// };
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // Your backend URL

// Fetch the list of cached contracts
export const fetchContracts = () => {
    return axios.get(`${API_BASE_URL}/contracts`);
};

// Fetch insights for a specific contract
export const fetchContractInsights = (filename) => {
    return axios.get(`${API_BASE_URL}/contracts/${filename}`);
};
