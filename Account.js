import React, { useState } from 'react';
import TransactionForm from './TransactionForm';

const Account = () => {
  const [balance, setBalance] = useState(1000);

  const handleTransaction = (amount, type) => {
    if (type === 'Deposit') {
      setBalance(balance + amount);
    } else if (type === 'Withdraw' && balance >= amount) {
      setBalance(balance - amount);
    } else {
      alert('Insufficient funds');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Account Balance: ${balance}</h2>
      <TransactionForm handleTransaction={handleTransaction} />
    </div>
  );
};

export default Account;
