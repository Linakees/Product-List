import axios from 'axios';

const response = await axios.get( 
  "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd");

  const products = response.data.products;

  export default products;


