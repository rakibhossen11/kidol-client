import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import Swal from "sweetalert2";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/shopping")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kidol-server.vercel.app/toys/${id}`,{
          method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = allToys.filter(allToy => allToy._id !== id);
            setAllToys(remaining);
          }
        })
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl my-4 p-4">Total Toys: {allToys.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="font-medium text-2xl">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
                handleDelete={handleDelete}
              ></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
