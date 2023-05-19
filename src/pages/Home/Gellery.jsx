import React from "react";

const Gellery = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center font-display text-4xl">Our Gellary</h2>
      <p className="text-center font-myFont">
        Welcome to our Sports Car Toy Gallery, where speed and style converge in
        miniature form! Get ready to rev up your imagination as we present a
        collection of sleek and stunning sports car toys that will captivate
        auto enthusiasts of all ages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10" data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
        <div
          className="card card-side shadow-xl"
        >
          <figure>
            <img
              className="p-4"
              src="https://image.made-in-china.com/201f0j00lsnVPhiWrMqH/Factory-Outlet-Fidget-Preschool-Educational-Plastic-Toys-Musical-Bus-Electric-Universal-Fun-Fruit-Car-Baby-Toys-Price-Baby-Kids-Children-Toys.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="card card-side shadow-xl">
          <figure>
            <img
              className="p-4"
              src="https://image.made-in-china.com/201f0j00HVEqmAflnhki/Licensed-12V-Child-Electric-Ride-on-Toy-Car-with-RC.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="card card-side shadow-xl">
          <figure>
            <img
              className="p-4"
              src="https://image.made-in-china.com/201f0j00cjkWCfvnlZbE/24V-2-Seater-Ride-on-Car-Kids-Electric-Toy-Car.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="card card-side shadow-xl">
          <figure>
            <img
              className="p-4"
              src="https://image.made-in-china.com/201f0j00GipcKPWJgabz/Licnesed-12V-Kids-Electric-Ride-on-Toy-Car-with-Remote-Control.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="card card-side shadow-xl">
          <figure>
            <img
              className="p-4"
              src="https://image.made-in-china.com/201f0j00kcQuwjEsbRrS/Kids-Model-Plastic-R-C-Toy-Car-1-26-Electric-Radio-Remote-Control-Toys-RC-Car.webp"
              alt=""
            />
          </figure>
        </div>
        <div className="card  shadow-xl">
          <figure>
            <img
              className="p-4"
              src="https://image.made-in-china.com/201f0j00NtAUsDIhfezn/Battery-Operated-Toys-Child-Car-Kids-Electric-Car-Ride-on-Car.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gellery;
