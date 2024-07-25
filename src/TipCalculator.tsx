// src/TipCalculator.tsx

import React, { useState } from 'react';

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number | ''>('');
  const [tipPercentage, setTipPercentage] = useState<number | ''>('');
  const [total, setTotal] = useState<string>('');

  const calculateTotal = () => {
    if (bill !== '' && bill > 0 && tipPercentage !== '') {
      const billAmount = parseFloat(bill.toString());
      const tipAmount = parseFloat(tipPercentage.toString());
      const totalAmount: number = billAmount + (billAmount * tipAmount) / 100;
      setTotal(totalAmount.toFixed(2));
    }
  };

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <div>
        <label>Bill Amount: </label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Tip Percentage: </label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateTotal}>Calculate</button>
      {total !== '' && (
        <div>
          <h2>Total Amount: ${total}</h2>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
