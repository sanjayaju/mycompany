import React from 'react';

function InvoiceDetails({ invoiceNumber, setInvoiceNumber, invoiceDate, setInvoiceDate, stateOfSupply, setStateOfSupply }) {
  return (
    <div className="invoice-details">
      <label>
        Invoice Number:
        <input type="number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
      </label>
      <label>
        Invoice Date:
        <input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
      </label>
      <label>
        State of Supply:
        <select value={stateOfSupply} onChange={(e) => setStateOfSupply(e.target.value)}>
          <option value="">Select</option>
          {/* Add more options as needed */}
        </select>
      </label>
    </div>
  );
}

export default InvoiceDetails;