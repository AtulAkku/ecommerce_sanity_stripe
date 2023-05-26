import React, { useState } from 'react';
import { AiOutlineShopping, AiOutlineDown } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = ({ user, logout }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div className="navbar-container">
        <a href='/'>
          <img src="/SOS_Logo.png" alt="Logo" />
        </a>
        <div>
          <ul id="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/Category">Products</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/About">About</a></li>
            {!user.value && <li><a href="/Login">Login</a></li>}
            {user.value &&
              <li className="dropdown">
                <a href="#"><i className="fa-solid fa-user"></i></a>
                <a href="#" className="dropbtn">
                  <AiOutlineDown />
                </a>
                <div className="dropdown-content">
                  <a href="/Profile">Profile</a>
                  {user.value && <a onClick={logout}> Logout </a>}
                </div>
              </li>
            }
            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar