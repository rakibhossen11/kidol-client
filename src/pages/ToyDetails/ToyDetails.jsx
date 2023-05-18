import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const { _id, name, image, price, quantity, rating, category, details } =
    toyDetails;
  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="grid grid-cols-2">
        <img className="w-full p-10" src={image} alt="" />
        <div className="space-y-5">
          <h2 className="font-display text-4xl">Toy Name: {name}</h2>
          <p className="font-myFont text-2xl">Available: {quantity}</p>
          <p className="font-myFont text-2xl">Product Category: {category}</p>
          <p className="font-myFont text-2xl">Price: {price}</p>
          <p className="font-myFont text-2xl">Rating: {rating}</p>
        </div>
      </div>
      <p className="font-myFont text-2xl">Product Details:</p>
      <br />
      <p className="font-myFont text-2xl">{details}</p>
    </div>
  );
};

export default ToyDetails;
