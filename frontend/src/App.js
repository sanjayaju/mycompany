// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoicePreview from './components/InvoicePreview';
import Sales from './pages/Sales';
import Dasboard from './pages/Dasboard';
import Invoice from './pages/Invoice'; // Import the new Sales page
import Footer from './components/Footer'; // Optional: If you have a Footer component
const invoiceData = {
  items: [
    { item: 'Test Product 1', qty: 2, price: 100, discount: 10 },
    { item: 'Test Product 2', qty: 1, price: 200, discount: 20 },
  ],
};

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Sales />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/invoice" element={<InvoicePreview invoiceData={invoiceData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
