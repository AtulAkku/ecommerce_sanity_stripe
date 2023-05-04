import React, { useState } from 'react';
import Link from 'next/link';
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
      {/* <head> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      {/* </head> */}
      <div className="navbar-container">
        {/* <p className="logo">
          <Link href="/">Sports Shop</Link>

        </p> */}


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
                  <AiOutlineDown/>
                </a>
              <div className="dropdown-content">
                <a href="/Profile">Profile</a>
                {user.value && <a onClick={logout}> Logout </a>}
              </div>
            </li>
            }



            {/* <li className={activeTab === 'home' ? 'active' : ''}><Link href="/" onClick={() => handleTabChange('home')}>HOME</Link></li>
            <li className={activeTab === 'about' ? 'active' : ''}><Link href="/About" onClick={() => handleTabChange('about')}>ABOUT</Link></li>
            <li className={activeTab === 'contact' ? 'active' : ''}><Link href="/Contact" onClick={() => handleTabChange('contact')}>CONTACT</Link></li>
            {!user.value && <li className={activeTab === 'login' ? 'active' : ''}><Link href="/Login" onClick={() => handleTabChange('login')}>LOGIN</Link></li>}
            {user.value &&
              <li className="dropdown">
                <a href="#" className={activeTab === 'user' ? 'dropbtn active' : 'dropbtn'} onClick={() => handleTabChange('user')}>
                  <i className="fa-solid fa-user"></i>
                  <AiOutlineDown/>
                </a>
                <div className="dropdown-content">
                  <a href="#">Profile</a>
                  {user.value && <a onClick={logout}> Logout </a>}
                </div>
              </li>
            } */}

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