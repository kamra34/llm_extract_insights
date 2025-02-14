// import React from "react";

// const InsightsPage = () => {
//     return (
//         <div className="insights-page">
//             <h2>Extract Insights from Your Document</h2>
//             <p>Upload a document to extract key parameters and insights.</p>
//         </div>
//     );
// };

// export default InsightsPage;
import React, { useEffect, useState } from "react";
import { fetchContracts, fetchContractInsights } from "../api";
import "../styles/InsightsPage.css";


const InsightsPage = () => {
    const [contracts, setContracts] = useState([]); // List of contracts
    const [selectedContract, setSelectedContract] = useState(null); // Selected contract insights
    const [error, setError] = useState(null); // Error message

    // Fetch the list of contracts on component mount
    useEffect(() => {
        fetchContracts()
            .then((response) => {
                setContracts(response.data.contracts); // Update the contract list
            })
            .catch((err) => {
                setError("Failed to load contracts.");
                console.error(err);
            });
    }, []);

    // Fetch insights for the selected contract
    const handleContractClick = (filename) => {
        fetchContractInsights(filename)
            .then((response) => {
                setSelectedContract(response.data); // Display insights
            })
            .catch((err) => {
                setError("Failed to load contract insights.");
                console.error(err);
            });
    };

    return (
        <div>
            <h2>Get Insights from Cached Contracts</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* List of contracts */}
            <div>
                <h3>Available Contracts</h3>
                <ul>
                    {contracts.map((filename, index) => (
                        <li key={index}>
                            <button onClick={() => handleContractClick(filename)}>
                                {filename.replace(".pkl", "")} {/* Display filename without .pkl */}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Selected contract insights */}
            {selectedContract && (
                <div>
                    <h3>Insights for {selectedContract.filename.replace(".pkl", "")}</h3>
                    <pre>{JSON.stringify(selectedContract.insights, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default InsightsPage;
