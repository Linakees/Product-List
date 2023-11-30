import React, { useState, useEffect } from 'react';
import  fetchProducts  from './listOfProducts'; 
import { ProductCardProps } from './productsCards';
import ProductCard from './productsCards';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [searchResults, setSearchResults] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts(); 
        setProducts(productsData); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData(); 
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, products]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            key={product.id}
            name={product.name}
            price={product.price}
            currency={product.currency}
            category={product.category}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;