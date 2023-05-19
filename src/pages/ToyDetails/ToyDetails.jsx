import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  useTitle('Toy Details');
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
    const image = toyDetails.image;
    const details = toyDetails.details;
    const rating = toyDetails.rating;
    const orderToy = {
      name,
      sellerName,
      category,
      price,
      quantity,
      image,
      details,
      rating,
    };
    console.log(orderToy);
    fetch("https://kidol-server.vercel.app/shopping", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if ((data.acknowledged = true)) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Toy has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
          <p className="font-myFont text-2xl flex gap-2">
            Rating:{" "}
            <Rating
              style={{ maxWidth: 150 }}
              value={Math.round(rating || 0)}
              readOnly
            />{" "}
            {rating}{" "}
          </p>
          <p className="font-myFont text-2xl">Seller Name: {sellerName}</p>
          <p className="font-myFont text-2xl">Seller Email: {sellerEmail}</p>

          <button
            onClick={handleToyShop}
            className="bg-orange-400 px-6 py-4 rounded-md text-xl text-white font-myFont"
          >
            Order Now
          </button>
        </div>
      </div>
      <p className="font-myFont text-2xl">Product Details:</p>
      <br />
      <p className="font-myFont text-2xl">{details}</p>
    </div>
  );
};

export default ToyDetails;
