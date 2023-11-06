import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const Product = ({ product }) => {
  const { _id, name, seller, image, category, rating, price, quantity } =
    product;
  const { user } = useContext(AuthContext);

  const handleUerNoFound = () => {
    if (!user) {
      Swal.fire(
        "User Not Found?",
        "You have to login first to view details?",
        "question"
      );
    }
  };

  return (
    // on card click navigate to details page
    <Link>
    {/* card design */}
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        {/* product image in card */}
          <img className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border h-36 shadow-blue-gray-500/40" src={image} alt="" />
          {/* above image on card heart icon for add to card */}
          <div>
            <button className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
        </div>
        {/* product descriptioin on card section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="block font-sans text-xl antialiased font-Ubuntuu leading-snug tracking-normal text-Blue">
              {name}
            </h2>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              {/* star icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              4.5
            </p>
          </div>
          <p className="block font-Ubuntuu text-xl antialiased leading-snug tracking-normal text-Zinc">$ {price}</p>
            {/* <Link to={`/toyDetails/${_id}`}></Link> */}
          {/* <p className="font-myFont text-lg ">Rating: <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating || 0)} readOnly /> {rating} </p>
            <Link onClick={handleUerNoFound} to={`/toyDetails/${_id}`}>
            <button className="bg-amber-600 px-6 py-4 rounded-md text-xl text-white font-myFont w-full">View Details</button>
            </Link> */}
        </div>
      </div>
    </Link>
  );
};

export default Product;
