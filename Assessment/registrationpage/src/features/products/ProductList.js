import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.title}
          price={product.id}
          description={product.body}
        />
      ))}
    </div>
  );
};

export default ProductList;
