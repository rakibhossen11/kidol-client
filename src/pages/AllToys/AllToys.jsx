import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [allToys, setAllToys] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  console.log(selected);

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/shopping")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);


  useEffect(()=>{
    setLoading(true);
    const fetchProducts = async () =>{
      try{
          const [value,type] = selected.split('-').map(item => item.toLowerCase());
          const response = await fetch(`https://kidol-server.vercel.app/shopping?value=${value}&type=${type}`);
          const data = await response.json();
          setAllToys(data);
      }finally{
        setTimeout(()=>{
          setLoading(false)
        },1000)
      };
    };
    fetchProducts();
  },[selected])

  const handleChangeToCategory = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <h2 className="text-3xl my-4 p-4">Total Toys: {allToys.length}</h2>
      <div className="flex justify-end mr-3 mb-3">
        <select
          onChange={handleChangeToCategory}
          className="select select-bordered"
        >
          <option value="">Sort by</option>
          <option value="Price-Ascending">Low To High</option>
          <option value="Price-Decending">High To Low</option>
        </select>
      </div>
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
              {allToys.slice(0, 10).map((allToy) => (
                <AllToysRow key={allToy._id} allToy={allToy}></AllToysRow>
              ))}
            </tbody>
          </table>
          <p className="text-center mt-5">
            <span>
              <button className="bg-yellow-400 w-1/2 rounded-md my-5 py-4 font-display text-black">
                See All Jobs
              </button>
            </span>
          </p>
        </div>
      {/* {laoding ? (
        
      ) : (
        <progress className="progress w-56"></progress>
      )} */}
    </div>
  );
};

export default AllToys;
