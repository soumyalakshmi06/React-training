import React from 'react';

const Product = ({ name, price, description }) => {
  console.log(name, price, description);
  return (
    <div>
       <h2>{`Name: ${name}`}</h2>
      <p>{`Description: ${description}`}</p>
      <p>{`Price: $${price}`}</p>
    </div>
  );
  
};



export default Product;
