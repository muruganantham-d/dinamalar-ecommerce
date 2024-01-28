// CartList.js
import React, { useState, useEffect } from 'react';
import '../styles/CartList.css';
import Navbar from '../components/Navbar';

const CartList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
          setFilteredProducts(data.products); 
        } else {
          console.error("API response doesn't contain an array of products.");
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    /* Filter products based on the search term */
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
        <div className='nav-content-alignment'>
                  <Navbar onSearch={handleSearch} />
        </div>


      {/* Product Cards */}
      <div className="cards">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img
                src={product.images[0]}
                alt={product.title}
                className='cart-image'
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartList;
