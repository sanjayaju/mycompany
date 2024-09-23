import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerSelection from '../components/CustomerSelection';
import InvoiceDetails from '../components/InvoiceDetails';
import ItemsEntry from '../components/ItemsEntry';
import AdditionalOptions from '../components/AdditionalOptions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Sales.css';

const Sales = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState(0);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [stateOfSupply, setStateOfSupply] = useState('');
  const [items, setItems] = useState([{ item: '', qty: 0, unit: '', price: 0, discount: 0, tax: 0 }]);
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [document, setDocument] = useState(null);

  const handleSaveAndClose = () => {
    const invoiceData = {
        customer,
        phone,
        billingAddress,
        items,
        total,
    };
    // Navigate to InvoicePreview and pass the data
    navigate('/invoice', { state: { invoiceData } });
};


  const handleAddRow = () => {
    setItems([...items, { item: '', qty: 0, unit: '', price: 0, discount: 0, tax: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === 'price' ? parseFloat(value) || 0 : value; // Ensure price is a number
    setItems(newItems);
    calculateTotal(newItems);
};


  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseFloat(item.qty) || 0;
      const discount = parseFloat(item.discount) || 0;
      const tax = parseFloat(item.tax) || 0;
      return acc + (price * qty - discount + tax);
    }, 0);
    setTotal(total); // Set total as a number
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
      
        {/* Round Off Section */}
        <div className="option round-off">
          <label htmlFor="round-off">Round Off</label>
          <input 
            type="checkbox" 
            id="round-off" 
            name="round-off" 
            checked={true} // Always checked for dummy data
            readOnly // Prevent interaction
          />
          </div>
        {/* Total Section */}
        <div className="option total">
          <label htmlFor="total">Total</label>
          <input 
            type="text" 
            id="total" 
            name="total" 
            value={total.toFixed(2)} // total should always be a number
            readOnly 
            />
        </div>
      
      </div>
      <Footer handleSave={handleSaveAndClose} />
    </div>
  );
};

export default Sales;
