import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";
import { SiPagespeedinsights } from "react-icons/si";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import usedCar from '../../../data/data';
const OurShop = () => {
  // const [useCar, setUsedCar] = useState([]);
  // console.log(usedCar)

  // useEffect(() => {
  //   fetch(usedCar)
  //     .then((res) => res.json())
  //     .then((data) => setUsedCar(data));
  // }, []);
  return (
    <section className="px-[100px] pt-[70px] pb-[70px] bg-[#F4F6F7]">
      <p className="font-signika text-[18px] text-[#2ECC71]">Available Brand Car</p>
      <div>
        <h3 className="font-hammersmith text-[44px]">Most Searched Used Car</h3>

      </div>
      <div className="grid grid-cols-4 gap-[15px] mt-[70px]">
        {
          usedCar.map((car) => 
          <div className="h-[450px] bg-[#FDFEFE] p-[15px] rounded-[6px] hover:border-[2px] hover:border-[#2ECC71]" key={car.id}>
            <img src={car.carImage} alt="" />
            <h2 className="font-signika text-[24px] mt-[10px]">{car.name}</h2>
            <div className="flex gap-[10px]">
              <p className="font-signika text-[18px]">$ {car.newPrice}</p>
              <p className="font-signika text-[18px] line-through">$ {car.oldPrice}</p>
            </div>
            <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><IoLocationSharp className="h-[16px] w-[16px]" /> {car.location}</p>
            <div className="flex justify-between">
              <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><IoIosSpeedometer className="h-[16px] w-[16px]" /> {car.runed}</p>
              <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><BsFillFuelPumpDieselFill className="h-[16px] w-[16px]" /> {car.oil}</p>
            </div>
            <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><SiPagespeedinsights className="h-[16px] w-[16px]" /> {car.cc}</p>
            <hr className="mx-[6px] mt-[10px]" />
            <div className="flex justify-between mt-[10px]">
              <button className="font-signika text-[18px]">View Details</button>
              <img src={car.brandLogo} alt="" />
            </div>
          </div>)
        }
      </div>
      <p className="font-signika text-[18px] text-center mt-[40px]">Available Car 50+ <span className="text-[#2ECC71]">View All</span> Car</p>
    </section>
  );
};

export default OurShop;
