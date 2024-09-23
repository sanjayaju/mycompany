import React, { useState } from 'react';
import CustomerSelection from '../components/CustomerSelection';
import InvoiceDetails from '../components/InvoiceDetails';
import ItemsEntry from '../components/ItemsEntry';
import InvoiceSummary from '../components/InvoiceSummary';
import AdditionalOptions from '../components/AdditionalOptions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Sales.css';

const Sales = () => {
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState(0);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [stateOfSupply, setStateOfSupply] = useState('');
  const [items, setItems] = useState([{ item: '', qty: 0, unit: '', price: 0, discount: 0, tax: 0 }]);
  const [roundOff, setRoundOff] = useState(false);
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);

  const handleAddRow = () => {
    setItems([...items, { item: '', qty: 0, unit: '', price: 0, discount: 0, tax: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
    calculateTotal(newItems);
  };

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.qty - item.discount + item.tax, 0);
    setTotal(total);
  };

  const handleAddDescription = () => {
    console.log('Description added:', description);
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      console.log('Image uploaded:', file);
    }
  };

  const handleAddDocument = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocument(file);
      console.log('Document added:', file);
    }
  };

  return (
    <div className="sales-page">
      <Header />
      <div className="content-container">
        <div className="left-section">
          <CustomerSelection 
            customer={customer} 
            setCustomer={setCustomer}
            phone={phone}
            setPhone={setPhone}
            billingAddress={billingAddress}
            setBillingAddress={setBillingAddress}
          />
        </div>

        <div className="right-section">
          <InvoiceDetails
            invoiceNumber={invoiceNumber}
            setInvoiceNumber={setInvoiceNumber}
            invoiceDate={invoiceDate}
            setInvoiceDate={setInvoiceDate}
            stateOfSupply={stateOfSupply}
            setStateOfSupply={setStateOfSupply}
          />
        </div>
      </div>

      <div className="item-summary-section">
        <ItemsEntry items={items} handleItemChange={handleItemChange} handleAddRow={handleAddRow} />
      </div>

      <div className="invoice-summary">
        <AdditionalOptions
          description={description}
          setDescription={setDescription}
          handleAddDescription={handleAddDescription}
          handleUploadImage={handleUploadImage}
          handleAddDocument={handleAddDocument}
        />
        <InvoiceSummary total={total} roundOff={roundOff} setRoundOff={setRoundOff} />
      </div>
      <Footer />
    </div>
  );
};

export default Sales;
