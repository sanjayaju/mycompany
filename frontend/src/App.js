// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // You can still import Header separately if needed
import Sales from './pages/Sales';
import Dasboard from './pages/Dasboard';
import Invoice from './pages/Invoice'; // Import the new Sales page
import Footer from './components/Footer'; // Optional: If you have a Footer component

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Sales />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/invoice" element={<Invoice />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
