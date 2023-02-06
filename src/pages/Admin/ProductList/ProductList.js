import React from "react";

const Product = () => {
  const products = [];
  for (let i = 0; i < 2; i++) {
    const product = (
      <li>
        <img src="" alt="Product" />
        <div>
          <p>울트라 향수</p>
          <span>₩58,000</span>
        </div>
      </li>
    );
    products.push(product);
  }

  return (
    <>
        <ul>{products}</ul>
    </>
  );
};

export default Product;
