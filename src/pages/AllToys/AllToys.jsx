import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/shopping")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl my-4 p-4">Total Toys: {allToys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="font-medium text-2xl">
              <th>Toy Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <AllToysRow
                key={allToy._id}
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
