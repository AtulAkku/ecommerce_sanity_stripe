import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Sports Shop</Link>
      </p>
      <div>
        <ul id="navbar">
          <li><a className="active" href="/">HOME</a></li>
          <li><a href="/Login">LOGIN</a></li>
          <li><a href="/About">ABOUT</a></li>
          <li><a href="/Contact">CONTACT</a></li>
          <li><a href="#"><i className="fa-solid fa-user"></i></a></li>
          <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar