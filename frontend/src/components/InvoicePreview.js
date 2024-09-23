import React from 'react';
import { useLocation } from 'react-router-dom';
import './Invoice.css';

const InvoicePreview = () => {
  const location = useLocation();
  const { invoiceData } = location.state || {};

  if (!invoiceData) {
    return <div>No invoice data available.</div>;
  }

  return (
    <div className="invoice-preview">
      <h2>Invoice Preview</h2>
      <div className="invoice-details">
        <h3>Customer Details</h3>
        <p>Name: {invoiceData.customer}</p>
        <p>Phone: {invoiceData.phone}</p>
        <p>Billing Address: {invoiceData.billingAddress}</p>
        <p>Invoice Number: {invoiceData.invoiceNumber}</p>
        <p>Invoice Date: {invoiceData.invoiceDate}</p>
        <p>State of Supply: {invoiceData.stateOfSupply}</p>

        <h3>Items</h3>
        <table className="invoice-items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.qty}</td>
                <td>{item.unit}</td>
                <td>{(typeof item.price === 'number' ? item.price : 0).toFixed(2)}</td>
                <td>{(typeof item.discount === 'number' ? item.discount : 0).toFixed(2)}</td>
                <td>{(typeof item.tax === 'number' ? item.tax : 0).toFixed(2)}</td>
                <td>{(((typeof item.price === 'number' ? item.price : 0) * (typeof item.qty === 'number' ? item.qty : 1)) - (typeof item.discount === 'number' ? item.discount : 0) + (typeof item.tax === 'number' ? item.tax : 0)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Summary</h3>
        <p>Total: {(typeof invoiceData.total === 'number' ? invoiceData.total : 0).toFixed(2)}</p>
        <p>Description: {invoiceData.description}</p>
        {invoiceData.image && <img src={invoiceData.image} alt="Uploaded" />}
        {invoiceData.document && <p>Document uploaded: {invoiceData.document.name}</p>}
      </div>
    </div>
  );
};

export default InvoicePreview;
