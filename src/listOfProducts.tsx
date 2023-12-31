import axios from 'axios';

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd");
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};

export default fetchProducts;

