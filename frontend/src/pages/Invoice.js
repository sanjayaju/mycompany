import React from 'react';


const InvoicePreview = () => {
  return (
    <div className="invoice-preview">
      <div className="preview-header">
        <h2>Preview</h2>
        <label>
          <input type="checkbox" /> Do not show invoice preview again
        </label>
        <button className="save-close-btn">Save & Close</button>
      </div>

      <div className="theme-selector">
        <label>Select Theme</label>
        <select>
          <option>Classic Themes</option>
          {/* Add more theme options */}
        </select>
      </div>

      <div className="invoice-container">
        <div className="invoice-header">
          <h1>Tax Invoice</h1>
          <div className="company-details">
            <h2>My Company</h2>
            {/* Add company details */}
          </div>
        </div>

        <div className="invoice-body">
          <div className="customer-details">
            <h3>Bill To</h3>
            <p>xianinfotech</p>
            {/* Add more customer details */}
          </div>

          <table className="invoice-items">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>HSN/SAC</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Discount</th>
                <th>Taxable Value</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test</td>
                <td></td>
                <td>1</td>
                <td>₹ 11.00</td>
                <td>₹ 0.00</td>
                <td>₹ 11.00</td>
                <td>₹ 0.99</td>
                <td>₹ 0.99</td>
                <td>₹ 12.98</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>

          <div className="invoice-summary">
            {/* Add total, tax summary, etc. */}
          </div>

          <div className="invoice-footer">
            <p>Terms and Conditions</p>
            {/* Add terms and conditions */}
            <div className="signature">
              <p>Authorized Signatory</p>
            </div>
          </div>
        </div>
      </div>

      <div className="invoice-actions">
        <button className="collect-payment-btn">Collect Payment</button>
        <div className="share-options">
          <button>WhatsApp</button>
          <button>Gmail</button>
          <button>Message</button>
        </div>
        <div className="download-options">
          <button>Download PDF</button>
          <button>Print Invoice (Thermal)</button>
          <button>Print Invoice (Normal)</button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;