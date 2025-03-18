import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No Router here
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisteryPage from './pages/RegisteryPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisteryPage />} />
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;





{/* <h1 className="text-gray-300 text-4xl md:text-6xl  
font-bold tracking-tight text-foreground ">
Nathflix
</h1> */}