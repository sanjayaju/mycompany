import React from 'react';

import './InvoiceSummary.css'

function InvoiceSummary({ total, roundOff, setRoundOff }) {
  return (
    <div className="invoice-summary">
      <label>
        Round Off:
        <input type="checkbox" checked={roundOff} onChange={() => setRoundOff(!roundOff)} />
      </label>
      <div>Total: {total}</div>
    </div>
  );
}

export default InvoiceSummary;