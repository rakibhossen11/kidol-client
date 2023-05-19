import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [showAll,setShowAll] = useState(false);
  useTitle('All Toys');

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/shopping")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleShowAll = () =>{
    setShowAll(true);
  }



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
            {allToys.slice(0,10).map((allToy) => (
              <AllToysRow
                key={allToy._id}
                allToy={allToy}
              ></AllToysRow>
            ))}
          </tbody>
        </table>
        <p className="text-center mt-5">
          <span onClick={handleShowAll}>
          <button className="bg-yellow-400 w-1/2 rounded-md my-5 py-4 font-display text-black">
            See All Jobs
          </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AllToys;
