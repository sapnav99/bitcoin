import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';

export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white', marginTop:'30px'}}>
      <BiChevronLeft style={{ color: 'gray', fontSize: '30px', marginRight: '25px' }} />
      <label className='header' style={{fontSize:'25px'}}>Bitcoin Wallet</label>
      <AiOutlineMore style={{ color: 'gray', fontSize: '30px', marginLeft: '25px' }} />
    </div>
  );
}
