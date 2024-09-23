import React from 'react';

function BillingAddress({ address }) {
  return (
    <div className="billing-address">
      <h4>Billing Address</h4>
      <p>{address}</p>
    </div>
  );
}

export default BillingAddress;