import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='main-container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <h3 className='heading'>Add Invoice</h3>
        <div className="form-group">
          <label>Invoice Number:</label>
          <input
            type="text"
            className="form-control"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Invoice Date:</label>
          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>
        <div >
          <label>Invoice Amount:</label>
          <input
            type="number"

            value={invoiceAmount}
            onChange={(e) => setInvoiceAmount(e.target.value)}
          />
        </div>
        <button type="submit" >Add Invoice</button>
      </form>
    </div>

  );
}

export default App;