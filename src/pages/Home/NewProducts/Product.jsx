import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Product = ({ product }) => {

  const { _id, name, seller,image, category,rating, price, quantity } = product;
  const {user} = useContext(AuthContext);

  const handleUerNoFound = () =>{
    if(!user){
      Swal.fire(
        'User Not Found?',
        'You have to login first to view details?',
        'question'
      )
    }
  }

  return (
    <div>
      <div className="card w-96 h-[600px] glass">
        <figure>
          <img
          className="w-96 h-64"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="font-display text-2xl">{name}</h2>
          <p className="font-myFont text-lg">Price: {price}</p>
          <p className="font-myFont text-lg ">Rating: <Rating 
            style={{ maxWidth: 150 }} 
            value={Math.round(rating || 0)} readOnly /> {rating} </p>
            <Link onClick={handleUerNoFound} to={`/toyDetails/${_id}`}>
            <button className="bg-amber-600 px-6 py-4 rounded-md text-xl text-white font-myFont w-full">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
