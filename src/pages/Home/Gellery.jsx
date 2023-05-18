import React from "react";

const Gellery = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center font-display text-4xl">Our Gellary</h2>
      <p className="text-center font-myFont">Welcome to our Sports Car Toy Gallery, where speed and style converge in miniature form! Get ready to rev up your imagination as we present a collection of sleek and stunning sports car toys that will captivate auto enthusiasts of all ages.</p>
      <div className="grid grid-cols-3">
        <div className="card card-side bg-[#fcdcea] shadow-xl">
          <figure>
            <img
              src="https://htmldemo.net/kidol/kidol/assets/img/category/1.png"
              alt=""
            />
          </figure>
          <div className="card-body justify-end">
            <h2 className="font-display">Baby Dress</h2>
            <p>$32.00</p>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gellery;
