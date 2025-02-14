import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
                <h1>ContractIQ</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/insights">Get Insights</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
