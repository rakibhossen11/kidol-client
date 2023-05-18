import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, seller,image, subCategory, price, quantity } = product;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <Link to={`/toyDetails/${_id}`}>
            <button className="btn btn-primary">Buy now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
