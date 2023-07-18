import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import './BuyAndSell.css'

export default function BuyAndSell() {
  return (
    <div className="card-container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-content">
              <BsCurrencyDollar className="card-icon" />
              <div>
              <label>Buy BTC</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-content">
              <BsCurrencyDollar className="card-icon" />
              <div>
              <label>Sell BTC</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
