import React from 'react';
import { Link } from "react-router-dom";

function ProductCard (props){
   return( 
   //  <div className="product-card">
   //  <p className='name'>{props.name}</p>
   //  <p className='price'>{props.price}</p>
   //  <p className='currency'>{props.currency}</p>
   //  <p className='category'>{props.category}</p>
   //  <p className='description'>{props.description}</p>
   //  <Link to={`/product/${props.id}`}>View Details</Link>
   //  </div>

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

{/* <Link to={`/product/${props.id}`}>
<div className="product-card">
<p className='name'>{props.name}</p>
<p className='price'>{props.price}</p>
<p className='currency'>{props.currency}</p>
<p className='category'>{props.category}</p>
<p className='description'>{props.description}</p>
</div>
</Link> */}


