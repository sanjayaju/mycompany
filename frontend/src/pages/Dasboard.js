import React, { useState } from 'react';


const DashboardPage = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [transactions, setTransactions] = useState([
    { date: '21/09/2024', invoiceNo: 6, partyName: 'xisminfotech', type: 'Sale', paymentType: 'Cash', amount: 15, balanceDue: 0 },
    { date: '21/09/2024', invoiceNo: 5, partyName: 'xisminfotech', type: 'Sale', paymentType: 'Cash', amount: 14, balanceDue: 0 },
    // Add more sample data as needed
  ]);

  return (
    <div className="dashboard-page">
      <header>
        <input type="text" placeholder="Enter Business Name" className="business-name-input" />
        <div className="action-buttons">
          <button className="add-sale">Add Sale</button>
          <button className="add-purchase">Add Purchase</button>
          <button className="add-more">Add More</button>
        </div>
      </header>

      <div className="date-filter">
        <select>
          <option>This Month</option>
          {/* Add more options */}
        </select>
        <input 
          type="date" 
          value={dateRange.start} 
          onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
        />
        <input 
          type="date" 
          value={dateRange.end} 
          onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
        />
        <select>
          <option>ALL FIRMS</option>
          {/* Add more options */}
        </select>
      </div>

      <div className="summary-boxes">
        <div className="summary-box paid">
          <h3>Paid</h3>
          <p>₹ 446.00</p>
        </div>
        <div className="summary-box unpaid">
          <h3>Unpaid</h3>
          <p>₹ 1,382.00</p>
        </div>
        <div className="summary-box total">
          <h3>Total</h3>
          <p>₹ 1,828.00</p>
        </div>
      </div>

      <div className="transactions-table">
        <h2>TRANSACTIONS</h2>
        <table>
          <thead>
            <tr>
              <th>DATE</th>
              <th>INVOICE NO</th>
              <th>PARTY NAME</th>
              <th>TRANSACTION TYPE</th>
              <th>PAYMENT TYPE</th>
              <th>AMOUNT</th>
              <th>BALANCE DUE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.invoiceNo}</td>
                <td>{transaction.partyName}</td>
                <td>{transaction.type}</td>
                <td>{transaction.paymentType}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balanceDue}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;