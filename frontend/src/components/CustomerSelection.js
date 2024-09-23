import React from 'react';
import './CustomerSelection.css'

const CustomerSelection = ({ customer, setCustomer, phone, setPhone, billingAddress, setBillingAddress }) => {
  return (
    <div className="customer-selection-container">
      {/* Customer Dropdown */}
      <div className="coolinput">
        <label className="text" htmlFor="customerSelect">
          Customer
        </label>
        <select
          id="customerSelect"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          className="input"
        >
          <option value="">Select Customer</option>
          <option value="customer1">Customer 1</option>
          <option value="customer2">Customer 2</option>
          <option value="customer3">Customer 3</option>
        </select>
      </div>

      {/* Phone Input */}
      <div className="coolinput">
        <label className="text" htmlFor="customerPhone">
          Phone
        </label>
        <input
          type="text"
          id="customerPhone"
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>

      {/* Billing Address Textarea */}
      <div className="coolinput">
        <label className="text" htmlFor="billingAddress">
          Billing Address
        </label>
        <textarea
          id="billingAddress"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          rows="4"
          className="input"
          placeholder="Enter billing address here"
        />
      </div>
    </div>
  );
};

export default CustomerSelection;
