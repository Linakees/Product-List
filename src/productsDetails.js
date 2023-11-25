import products from './listOfProducts';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './productsCards';
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams(); 

    const product = products.find(product => product.id === parseInt(id));
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div className='descriptionWrapper'>
        <ProductCard 
            key = {product.id}
            name = {product.name}
            price = {product.price}
            currency = {product.currency}
            category = {product.category}
            description = {product.description} 
        />
          <div className='returnBack'>
            <Link to="/">Return</Link>
          </div>
      </div>
    );
};
      
export default ProductDetails;