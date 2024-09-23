// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Link to the CSS for styling the footer

const Footer = ({ handleSave }) => {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2024 Your Company Name. All rights reserved.</p>

      <div className="footer-buttons">
        <button className="footer-btn share-btn">Share</button>
        <button className="footer-btn save-btn" onClick={handleSave}>Save</button>
      </div>
    </footer>
  );
};

export default Footer;
