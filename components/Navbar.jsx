import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = ({user,logout}) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
  <>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </head>
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Sports Shop</Link>
      </p>
      <div>
        <ul id="navbar">
          <li><a className="active" href="/">HOME</a></li>
          <li><a href="/About">ABOUT</a></li>
          <li><a href="/Contact">CONTACT</a></li>
          {!user.value && <li><a href="/Login">LOGIN</a></li>}
          {user.value && <li><a href="#"><i className="fa-solid fa-user"></i></a></li>}
          {user.value && <li><a onClick={logout}> LOGOUT </a></li>}
        </ul>
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  </>
  )
}

export default Navbar