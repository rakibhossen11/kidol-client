import React, { useContext, useEffect, useState } from "react";
// import AllToysRow from "./AllToysRow";
import Swal from "sweetalert2";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  useTitle("My-Toys");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  // const [laoding, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  // console.log(user.email);

  const url = `https://kidol-server.vercel.app/toys?sellerEmail=${user.email}&sort=1`;
  // console.log(url);

  // if(loading){
  //   return <><p>data processing</p></>;
  // }

  useEffect(() => {
    // setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        // setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
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
        fetch(`https://kidol-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((allToy) => allToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

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
      <h2 className="text-3xl my-4 p-4">Total Toys: {myToys.length}</h2>
      <div className="flex justify-end mr-3 mb-3">
        <select
          onChange={handleChangeToCategory}
          className="select select-bordered"
        >
          <option value="">Sort by</option>
          <option value="Price-Decending">High To Low</option>
          <option value="Price-Ascending">Low To High</option>
        </select>
      </div>
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
            {myToys.map((myToy) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
