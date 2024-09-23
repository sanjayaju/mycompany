import React from 'react';

function ItemsEntry({ items, handleItemChange, handleAddRow }) {
  return (
    <div className="items-entry">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Price/Unit</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            // Parse inputs to ensure they are numbers
            const qty = parseFloat(item.qty) || 0;
            const price = parseFloat(item.price) || 0;
            const discount = parseFloat(item.discount) || 0;
            const tax = parseFloat(item.tax) || 0;

            const amount = (price * qty - discount + tax).toFixed(2);

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input 
                    type="text" 
                    value={item.item} 
                    onChange={(e) => handleItemChange(index, 'item', e.target.value)} 
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={qty} 
                    onChange={(e) => handleItemChange(index, 'qty', e.target.value)} 
                  />
                </td>
                <td>
                  <input 
                    type="text" 
                    value={item.unit} 
                    onChange={(e) => handleItemChange(index, 'unit', e.target.value)} 
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => handleItemChange(index, 'price', e.target.value)} 
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={discount} 
                    onChange={(e) => handleItemChange(index, 'discount', e.target.value)} 
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    value={tax} 
                    onChange={(e) => handleItemChange(index, 'tax', e.target.value)} 
                  />
                </td>
                <td>
                  {amount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

export default ItemsEntry;
