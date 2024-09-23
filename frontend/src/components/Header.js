import React, { useState } from 'react';
import './Header.css'; // Import your CSS for styling

const Header = () => {
  const [isCredit, setIsCredit] = useState(false); // Toggle state

  const handleToggle = () => {
    setIsCredit((prevState) => !prevState); // Toggle between Credit and Cash
  };

  return (
    <header className="header">
      {/* Flex container to align both title and toggle in a row */}
      <div className="header-container flex items-center">
        {/* Sales Heading */}
        <div className="header-title">
          <h1>Sales</h1>
        </div>

        {/* Divider (|) */}
        <div className="divider mx-4">|</div>

        {/* Payment Mode Toggle */}
        <div className="payment-mode-toggle flex items-center">
          {/* Cash Label */}
          <span className={`text-sm font-medium ${!isCredit ? 'text-gray-900' : 'text-gray-500'}`}>
            Cash
          </span>

          {/* Toggle Button */}
          <button
            className={`inline-flex items-center mx-3 cursor-pointer ${isCredit ? 'toggle-button-active' : ''}`}
            onClick={handleToggle}
          >
            <div className="toggle-button-indicator"></div>
          </button>

          {/* Credit Label */}
          <span className={`text-sm font-medium ${isCredit ? 'text-gray-900' : 'text-gray-500'}`}>
            Credit
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;