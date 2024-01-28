import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; 2024 Dinamalar. All Rights Reserved.</p>
        </div>
        <div className="contact">
          <p>Contact us: dmrcbe@dinamalar.in</p>
        </div>
        <div className="social-media">
          <a href="#" className="icon"><FaFacebook /></a>
          <a href="#" className="icon"><FaTwitter /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
