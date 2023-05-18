import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, seller,image, subCategory, price, quantity } = product;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <Link to={`/myToys/${id}`}>
            <button className="btn btn-primary">Buy now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
