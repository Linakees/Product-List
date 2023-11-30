import React from 'react';
import { Link } from "react-router-dom";

export interface ProductCardProps {
   id: number;
   name: string;
   price: number;
   currency: string;
   category: string;
   description?: string; 
 }

const ProductCard  = (props: ProductCardProps) => {
   return( 
      <Link to={`/product/${props.id}`}>
         <div className="product-card">
            <p className='name'>{props.name}</p>
            <p className='price'>{props.price}</p>
            <p className='currency'>{props.currency}</p>
            <p className='category'>{props.category}</p>
            <p className='description'>{props.description}</p>
         </div>
      </Link> 
   );
}

export default ProductCard;



