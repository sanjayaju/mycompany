import React from 'react';
import './AdditionalOptions.css';

const AdditionalOptions = ({ roundOff, total }) => {
  return (
    <div className="additional-options-container">
      <div className="additional-options">
        {/* Description Section */}
        <div className="option description">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter description here..."></textarea>
        </div>
        
        {/* Pricing Section */}
        <div className="option pricing">
          <label htmlFor="pricing">Pricing</label>
          <input type="text" id="pricing" name="pricing" placeholder="Enter pricing here..." />
        </div>

        {/* Additional Info */}
        <div className="option additional-info">
          <label htmlFor="additional-info">Additional Info</label>
          <textarea id="additional-info" name="additional-info" placeholder="Enter any additional information here..."></textarea>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;
