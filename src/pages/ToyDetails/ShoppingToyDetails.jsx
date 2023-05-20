import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import useTitle from "../../hooks/useTitle";


const ShoppingToyDetails = () => {
  const toyDetails = useLoaderData();
  useTitle('Shop Toy')
  const {
    _id,
    name,
    sellerName,
    sellerEmail,
    image,
    price,
    quantity,
    rating,
    category,
    details,
  } = toyDetails;

  const handleToyShop = (event) => {
    event.preventDefault();
    const name = toyDetails.name;
    const category = toyDetails.category;
    const price = toyDetails.price;
    const quantity = toyDetails.quantity;
    const image = toyDetails.image;
    const details = toyDetails.details;
    const rating = toyDetails.rating;
    const orderToy = { name, sellerName, category, price, quantity, image,details,rating };
    // console.log(orderToy);
    fetch("https://kidol-server.vercel.app/shopping", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

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
          <p className="font-myFont text-2xl">Seller Name: {sellerName}</p>
          <p className="font-myFont text-2xl">Seller Email: {sellerEmail}</p>
          {/* <button
            onClick={handleToyShop}
            className="bg-orange-400 px-6 py-4 rounded-md text-xl text-white font-myFont"
          >
            Order Now
          </button> */}
        </div>
      </div>
      <p className="font-myFont text-2xl">Product Details:</p>
      <br />
      <p className="font-myFont text-2xl">{details}</p>
    </div>
  );
};

export default ShoppingToyDetails;
