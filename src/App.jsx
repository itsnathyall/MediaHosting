import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import RegisteryPage from "./pages/RegisteryPage.jsx"

function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisteryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
