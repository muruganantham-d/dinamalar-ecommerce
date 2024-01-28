// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://stat.dinamalar.com/new/mobile/dmrenglishlogonewdark.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="icons">
        <i className="far fa-bell"></i> 
        <i className="far fa-user"></i> 
      </div>
    </div>
  );
};

export default Navbar;
