import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import RegisteryPage from "./pages/RegisteryPage.jsx"
import WelcomePage from "./pages/WelcomePage.jsx";

function App() {
  return (
    
    <>

      <WelcomePage/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisteryPage />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;





{/* <h1 className="text-gray-300 text-4xl md:text-6xl  
font-bold tracking-tight text-foreground ">
Nathflix
</h1> */}