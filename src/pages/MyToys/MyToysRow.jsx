import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({myToy,handleDelete}) => {
    const {_id,name,image,sellerName,category,price,quantity} = myToy;

    return (
        <tr className="font-myFont">
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
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
      <div className="avatar">
  <div className="w-24 rounded-xl">
    <img src={image} />
  </div>
</div>
      </td>
            <th>{name}</th>
            <th>{sellerName}</th>
            <th>{category}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th>
              <Link to={`/updateToys/${_id}`}>
              <button>Update</button>
              </Link>
              </th> 
    </tr>
    );
};

export default MyToysRow;