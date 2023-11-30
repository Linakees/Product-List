import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from './productsCards';
import fetchProducts from './listOfProducts'; 
import { ProductCardProps } from './productsCards';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<ProductCardProps | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
      const products = await fetchProducts(); 
      const foundProduct: ProductCardProps | null = products.find(
        (product: ProductCardProps) => product.id === parseInt(String(id), 10)
      ) || null;
      setProduct(foundProduct || null);
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      }
    };

    getProduct(); 
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='descriptionWrapper'>
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        currency={product.currency}
        category={product.category}
        description={product.description}
        id={product.id}
      />
      <div className='returnBack'>
        <Link to="/">Return</Link>
      </div>
    </div>
  );
};

export default ProductDetails;