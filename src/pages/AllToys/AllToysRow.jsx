import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({allToy}) => {
    const {_id,name,sellerName,category,price,quantity} = allToy;
    console.log(allToy);

  return (
    <tr className="font-myFont">
      <td>
          <div className="">
          Toy Image
          </div>
      </td>
            <th>{name}</th>
            <th>{sellerName}</th>
            <th>{category}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th>
              <Link to={`/shoppingToyDetails/${_id}`}>
              <button>View Details</button>
              </Link>
              </th> 
    </tr>
  );
};

export default AllToysRow;
