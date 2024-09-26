import React, { useState } from 'react';

const TransactionForm = ({ handleTransaction }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('Deposit');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      handleTransaction(transactionAmount, type);
    } else {
      alert('Enter a valid amount');
    }
    setAmount(0);
  };

  return (
    <div className="form-container">
      <h3 className="form-heading">Make a Transaction</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Transaction Type: </label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="form-input">
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
          </select>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;
