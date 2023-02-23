import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/productData";
import "../styles/product-list.css";
function ProductList() {
  return (
    <div className="product-list">
    
      {productData.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
}
export default ProductList;
