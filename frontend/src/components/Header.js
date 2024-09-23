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
          <label className="inline-flex items-center mx-3 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isCredit}
              onChange={handleToggle}
            />
            <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
              ${isCredit ? 'peer-checked:bg-blue-600' : ''}`}>
              <div className={`after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                ${isCredit ? 'after:translate-x-full rtl:after:-translate-x-full after:border-white' : ''}`}>
              </div>
            </div>
          </label>

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
