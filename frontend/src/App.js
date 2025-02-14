import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import InsightsPage from "./pages/InsightsPage";
import './styles/App.css';// Add global styles

const App = () => {
    return (
        <Router>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/insights" element={<InsightsPage />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
