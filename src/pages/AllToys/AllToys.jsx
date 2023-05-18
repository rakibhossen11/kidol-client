import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl">Bookings: {allToys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Image</th>
            <th>Name</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Quantity</th>
            <th>Details</th> 
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <AllToysRow
                key={allToy.id}
                allToy={allToy}
              ></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
