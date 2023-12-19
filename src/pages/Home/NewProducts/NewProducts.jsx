import React from "react";
import { launchedCar } from "../../../data/data";
import { IoIosSpeedometer } from "react-icons/io";
import { SiPagespeedinsights } from "react-icons/si";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";

const NewProducts = () => {

  return (
    <section className="px-[20px] pt-[100px]">
      {/* Recent Launched Car */}
      <div>
        <p className="font-signika text-[22px] text-[#2ECC71]">Recent Launched</p>
        <h1 className="font-hammersmith text-[44px]">Recent Launched Car</h1>
      </div>
      {/* Launched  car */}
      <div className="grid grid-cols-3 gap-[15px] mt-[100px] pb-[70px]">
        {
          launchedCar.map((car) => 
          <div className="bg-[#FBFCFC] rounded-[6px] p-[10px] h-[420px] hover:border-[2px] hover:border-[#2ECC71]">
            <img src={car.carImage} alt="" />
            <h1 className="font-signika text-[24px] mt-[10px]">{car.name}</h1>
            <p className="font-signika text-[18px]">Current bid: $ {car.newPrice}</p>
            <div className="flex justify-between mb-[8px]">
              <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><IoIosSpeedometer className="h-[16px] w-[16px]" /> {car.runed}</p>
              <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><BsFillFuelPumpDieselFill className="h-[16px] w-[16px]" /> {car.oil}</p>
              <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]"><SiPagespeedinsights className="h-[16px] w-[16px]" /> {car.cc}</p>
            </div>
            <hr />
            <div className="flex justify-between mt-[10px]">
              <button className="flex gap-[8px] items-center font-signika text-[18px]"><FaCar className="h-[16px] w-[16px] text-[#2ECC71]" /> View Details</button>
              <img src={car.brandLogo} alt="" />
            </div>
          </div>
          )
        }
      </div>
    </section>
  );
};

export default NewProducts;
