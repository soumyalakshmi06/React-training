import React from "react";
import "../styles/product-card.css";
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.url} alt={product.title} />
      </div>

      <div className="product-info">
        <h2 class="product-card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p class="product-card-price">Price: ${product.price.toFixed(2)}</p>
 
        <div className="product-actions">

          <button className="product-action-button like-button">
            <i className="far fa-thumbs-up"></i> Like
          </button>

          <button className="product-action-button share-button">
            <i className="far fa-share-square"></i> Share
     
          </button>
   
          <button className="product-action-button purchase-button">
            <i className="fas fa-shopping-cart"></i> Purchase
      
          </button>
  
        </div>

      </div>

    </div>
  );
}
export default ProductCard;
