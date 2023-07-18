import React, { useState } from 'react';
import bicon from '../Images/icons8-bitcoin.svg';
import { BsChevronCompactDown } from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Tabs from './Tabs';
import './Card.css';

export default function Card() {
  const [activeTab, setActiveTab] = useState('Day');
  const [showOptions, setShowOptions] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const chartData = {
    Day: [
      { name: '00:00', value: 400 },
      { name: '04:00', value: 300 },
      { name: '08:00', value: 500 },
      { name: '12:00', value: 200 },
      { name: '16:00', value: 600 },
      { name: '20:00', value: 400 },
      { name: '24:00', value: 700 },
    ],
    Week: [
      { name: 'Mon', value: 500 },
      { name: 'Tue', value: 400 },
      { name: 'Wed', value: 300 },
      { name: 'Thu', value: 600 },
      { name: 'Fri', value: 700 },
      { name: 'Sat', value: 800 },
      { name: 'Sun', value: 900 },
    ],
    Month: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 500 },
      { name: 'Apr', value: 200 },
      { name: 'May', value: 600 },
      { name: 'Jun', value: 400 },
      { name: 'Jul', value: 700 },
      { name: 'Aug', value: 900 },
      { name: 'Sep', value: 800 },
      { name: 'Oct', value: 600 },
      { name: 'Nov', value: 500 },
      { name: 'Dec', value: 300 },
    ],
    Year: [
      { name: '2020', value: 1000 },
      { name: '2021', value: 1500 },
      { name: '2022', value: 1200 },
      { name: '2023', value: 1800 },
    ],
  };

  const data = chartData[activeTab];

  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <div className="header-content">
              <img src={bicon} className="card-img-top" alt="Bitcoin" />
              <div>
                <label>Bitcoin</label>
                <label style={{ marginLeft: '150px' }}>BTC</label>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h1 className="card-text">3.529020 BTC</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ textAlign: 'left', marginRight: '130px' }}>$19.153 USD</p>
            <span style={{ backgroundColor: 'red', padding: '5px 10px', borderRadius: '20px', textAlign: 'right' }}>
              -2.32%
            </span>
          </div>
          <div className="down-icon-container" onClick={handleToggleOptions}>
            <BsChevronCompactDown className="down-icon" />
          </div>
        </div>
        {showOptions && (
          <div className="options-container">
            <button className="buy-button">Buy</button>
            <button className="sell-button">Sell</button>
          </div>
        )}
      </div>
      <div>
        <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
