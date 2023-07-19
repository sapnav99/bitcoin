import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import './BuyAndSell.css';

export default function BuyAndSell() {
  return (
    <div className="flex-container">
      <div className="flex-child">
        <div className="icon-container">
          <BsCurrencyDollar className="card-icon1" />
        </div>
        <p>Buy BTC</p>
      </div>
      <div className="flex-child">
        <div className="icon-container">
          <BsCurrencyDollar className="card-icon2" />
        </div>
        <p>Sell BTC</p>
      </div>
    </div>
  );
}
