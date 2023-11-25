import React, { useState, useEffect } from 'react';
import products from './listOfProducts';
import ProductCard from './productsCards';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const timer = setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, 500); 

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='pageContainer'>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="listContainer">
        {searchResults.map((product) => (
            <ProductCard 
                key = {product.id}
                name = {product.name}
                price = {product.price}
                currency = {product.currency}
                category = {product.category}
                id={product.id}
            />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;