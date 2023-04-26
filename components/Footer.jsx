import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (<>
    <div className="footer-top">
      <div className="footer-section">
        <ul>
          <h1>Help & Contact</h1>
          <li><a>Your Account</a></li>
          <li><a>Your Order</a></li>
          <li><a>Contact us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h1>Product Categories</h1>
          <li><a>Vollyball</a></li>
          <li><a>Football</a></li>
          <li><a>Cricket</a></li>
          <li><a>Badminton</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h1>About us</h1>
          <li><a>Email</a></li>
          <li><a href="https://instagram.com/atul_akku">Instagram</a></li>
          <li><a>Facebook</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-container">
      <p>2023 Sports Out Studios All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
    </>
  )
}

export default Footer