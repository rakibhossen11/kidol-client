import React from "react";

const CustomerReview = () => {
  return (
    <div>
      <h2 className="text-center font-display text-4xl">Customer Review</h2>
      <p className="text-center font-myFont">
      The review section on this website is a treasure trove of insights! It allows users to share their honest opinions, ratings, and experiences. It's a great place to gather valuable feedback and make informed decisions. A must-visit for those seeking authentic user perspectives.
      </p>
      <div className="p-10 mx-auto grid grid-cols-2 gap-4">
        <div className="card card-side bg-orange-300 shadow-xl p-10">
          <figure className="w-40 h-40">
            <img
              src="https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
          </figure>
          <div className=" p-4">
            <h2 className="font-display text-2xl">Emma Davis</h2>
            <p>
            This toy shop is a dream come true for kids and parents alike! The collection is extensive, the staff is knowledgeable and friendly, and the prices are reasonable. It's a haven for toy enthusiasts. Highly recommended for endless fun and joyful shopping!
            </p>
          </div>
        </div>
        <div className="card card-side bg-orange-300 shadow-xl p-10">
        <figure className="w-40 h-40">
            <img
              src="https://teta.kitestudio.co/wp-content/uploads/2021/09/person-2.jpg"
              alt=""
            />
          </figure>
          <div className=" p-4">
            <h2 className="font-display text-2xl"> Sophia</h2>
            <p>
              "Amazing toy shop! Wide variety of toys, friendly staff, and
              affordable prices. My kids love it! Highly recommend for all your
              toy needs. A must-visit!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
