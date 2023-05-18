import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({allToy}) => {
    const {_id,name,seller,subCategory,price,quantity} = allToy;
  return (
    <tr>
      <th>
        <button className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
          <div className="">
          Toy Image
          </div>
      </td>
            <th>{name}</th>
            <th>{seller}</th>
            <th>Seller Email</th>
            <th>{subCategory}</th>
            <th>{price}</th>
            <th>Rating</th>
            <th>{quantity}</th>
            <th>
              <Link to={`/updateToys/${_id}`}>
              <button>Update</button>
              </Link>
              </th> 
    </tr>
  );
};

export default AllToysRow;
