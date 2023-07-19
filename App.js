import React from 'react';
import Header from './Components/Header'
import Card from './Components/Card';
import Footer from './Components/Footer';
import BuyAndSell from './Components/BuyAndSell';
import './App.css'
export default function App() {
 

  return (
    <div className='App'>
      <Header/>
      <Card />
      <BuyAndSell/>
      <Footer/>
    </div>
  );
}
