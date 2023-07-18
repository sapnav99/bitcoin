import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';

export default function BuyAndSell() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <BsCurrencyDollar className="card-icon" />
          <label>Buy BTC</label>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <BsCurrencyDollar className="card-icon" />
          <label>Buy BTC</label>
        </div>
      </div>
    </div>
  );
}
