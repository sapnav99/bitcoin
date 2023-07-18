import React, { useState } from 'react';
import Header from './Components/Header'
import Card from './Components/Card';
import Footer from './Components/Footer';
import BuyAndSell from './Components/BuyAndSell';
export default function App() {
 

  return (
    <div>
      <Header/>
      <Card />
      <BuyAndSell/>
      <Footer/>
    </div>
  );
}
