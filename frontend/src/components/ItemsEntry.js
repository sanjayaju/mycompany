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
          {items.map((item, index) => (
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
                  value={item.qty} 
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
                  value={item.price} 
                  onChange={(e) => handleItemChange(index, 'price', e.target.value)} 
                />
              </td>
              <td>
                <input 
                  type="number" 
                  value={item.discount} 
                  onChange={(e) => handleItemChange(index, 'discount', e.target.value)} 
                />
              </td>
              <td>
                <input 
                  type="number" 
                  value={item.tax} 
                  onChange={(e) => handleItemChange(index, 'tax', e.target.value)} 
                />
              </td>
              <td>
                {(item.price * item.qty - item.discount + item.tax).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

export default ItemsEntry;
