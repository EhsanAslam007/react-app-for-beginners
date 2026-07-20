import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt, FaMobile } from 'react-icons/fa';

const Header = ({ title, width }) => {
  console.log('Header width:', width);
  return (
    <header className='Header'>
      <h1>{title}</h1>
    </header>
  )
}

export default Header