import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (<>
    <div className="footer-top">
      <div className="footer-section">
        <ul>
          <h1>Help & Contact</h1>
          <li><a href='/Profile'>Your Account</a></li>
          <li><a href='/Contact'>Contact us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h1>Product Categories</h1>
          <li><a href='/Category'>Vollyball</a></li>
          <li><a href='/Category'>Football</a></li>
          <li><a href='/Category'>Cricket</a></li>
          <li><a href='/Category'>Badminton</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <h1>About us</h1>
          <li><a >Email</a></li>
          <li><a href="https://instagram.com/atul_akku">Instagram</a></li>
          <li><a href='https://www.facebook.com/profile.php?id=100010328431787&sk='>Facebook</a></li>
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