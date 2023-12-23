import React from "react";
import { launchedCar } from "../../../data/data";
import { upcoming } from "../../../data/data";
import { IoIosSpeedometer } from "react-icons/io";
import { SiPagespeedinsights } from "react-icons/si";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaCar, FaAward } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { FaHandshake,FaPersonBooth } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NewProducts = () => {
  return (
    <section>
      {/* Recent Launched Car Start */}
      <section className="px-[20px] pt-[100px]">
        <div>
          <p className="font-signika text-[22px] text-[#2ECC71]">
            Recent Launched
          </p>
          <h1 className="font-hammersmith text-[44px]">Recent Launched Car</h1>
        </div>
        {/* Launched  car */}
        <div className="grid grid-cols-3 gap-[15px] mt-[100px] pb-[70px]">
          {launchedCar.map((car) => (
            <div className="bg-[#FBFCFC] rounded-[6px] p-[10px] h-[420px] hover:border-[2px] hover:border-[#2ECC71]">
              <img src={car.carImage} alt="" />
              <h1 className="font-signika text-[24px] mt-[10px]">{car.name}</h1>
              <p className="font-signika text-[18px]">
                Current bid: $ {car.newPrice}
              </p>
              <div className="flex justify-between mb-[8px]">
                <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]">
                  <IoIosSpeedometer className="h-[16px] w-[16px]" /> {car.runed}
                </p>
                <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]">
                  <BsFillFuelPumpDieselFill className="h-[16px] w-[16px]" />{" "}
                  {car.oil}
                </p>
                <p className="flex items-center font-signika text-[18px] mt-[10px] gap-[10px] text-[#B3B6B7]">
                  <SiPagespeedinsights className="h-[16px] w-[16px]" /> {car.cc}
                </p>
              </div>
              <hr />
              <div className="flex justify-between mt-[10px]">
                <button className="flex gap-[8px] items-center font-signika text-[18px]">
                  <FaCar className="h-[16px] w-[16px] text-[#2ECC71]" /> View
                  Details
                </button>
                <img src={car.brandLogo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Recent Launched Car End */}

      {/* Car Agency Start */}
      <section className="bg-[#F2F3F4] px-[40px] pt-[100px] pb-[70px]">
        <p className="font-signika text-[22px] text-[#2ECC71] text-center">
          Best Car Agency
        </p>
        <h3 className="font-hammersmith text-[44px] text-center">
          Why Only Choose Drivco
        </h3>
        {/* card start */}
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="bg-[#FBFCFC] rounded-[6px] p-[30px] hover:border-[2px] hover:border-[#2ECC71] mt-[80px]">
            <div className="flex gap-[20px]">
              <FaMoneyBillAlt className="h-[32px] w-[32px] text-[]" />
              <h3 className="font-hammersmith text-[24px]">
                {" "}
                <span className="text-[#2ECC71]">Affordable</span> Price
              </h3>
            </div>
            <p className="font-signika text-[18px] mt-[10px] text-[#A6ACAF]">
              An affordable price for a luxury car may be significantly higher
              than an affordable price for a budget car...
            </p>
          </div>
          <div className="bg-[#FBFCFC] rounded-[6px] p-[30px] hover:border-[2px] hover:border-[#2ECC71] mt-[80px]">
            <div className="flex gap-[20px]">
              <FaAward className="h-[32px] w-[32px] text-[]" />
              <h3 className="font-hammersmith text-[24px]">
                Money Back <span className="text-[#2ECC71]">Guarantee</span>
              </h3>
            </div>
            <p className="font-signika text-[18px] mt-[10px] text-[#A6ACAF]">
              Some may offer a full refund with no questions asked, others may
              require the customer to provide...
            </p>
          </div>
          <div className="bg-[#FBFCFC] rounded-[6px] p-[30px] hover:border-[2px] hover:border-[#2ECC71] mt-[80px]">
            <div className="flex gap-[20px]">
              <AiOutlineSafetyCertificate className="h-[32px] w-[32px] text-[]" />
              <h3 className="font-hammersmith text-[24px]">
                8 Month <span className="text-[#2ECC71]">Warranty</span>
              </h3>
            </div>
            <p className="font-signika text-[18px] mt-[10px] text-[#A6ACAF]">
              During this 8-month period, if the product fails to function
              properly due to a defect or malfunction...
            </p>
          </div>
        </div>
        {/* card end */}
        <hr className="mt-[40px] border-[2px] text-[#A6ACAF]" />
        <div className="grid grid-cols-4 py-[40px]">
          <div className="flex gap-[14px] items-center">
            <FaCar className="h-[32px] w-[32px] text-[#34495E]" />
            <div>
              <h3 className="font-hammersmith text-[24px]">336K+</h3>
              <p className="font-Nunito text-[16px] text-[#A6ACAF]">
                Car Available
              </p>
            </div>
          </div>
          <div className="flex gap-[14px] items-center">
            <MdOutlineSell className="h-[32px] w-[32px] text-[#34495E]" />
            <div>
              <h3 className="font-hammersmith text-[24px]">227K+</h3>
              <p className="font-Nunito text-[16px] text-[#A6ACAF]">Car Sold</p>
            </div>
          </div>
          <div className="flex gap-[14px] items-center">
            <IoCarSportSharp className="h-[32px] w-[32px] text-[#34495E]" />
            <div>
              <h3 className="font-hammersmith text-[24px]">112K+</h3>
              <p className="font-Nunito text-[16px] text-[#A6ACAF]">
                Used Cars
              </p>
            </div>
          </div>
          <div className="flex gap-[14px] items-center">
            <FaHandshake className="h-[32px] w-[32px] text-[#34495E]" />
            <div>
              <h3 className="font-hammersmith text-[24px]">55.16%</h3>
              <p className="font-Nunito text-[16px] text-[#A6ACAF]">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-[20px] border-[2px] text-[#A6ACAF]" />
      </section>
      {/* Car Agency End */}
      {/* up coming start */}
      <section className="px-[20px] pt-[100px]">
        <div>
          <p className="font-signika text-[22px] text-[#2ECC71]">On The Way</p>
          <h1 className="font-hammersmith text-[44px]">Upcoming Cars</h1>
        </div>
        <div className="grid grid-cols-3 gap-[15px] mt-[100px] pb-[70px]">
          {upcoming.map((car) => (
            <div className="bg-[#FBFCFC] rounded-[6px] p-[10px] h-[420px] hover:border-[2px] hover:border-[#2ECC71]">
              <img src={car.image} alt="" />
              <p className="font-signika text-[24px] mt-[10px]">
                 $ {car.price}
              </p>
              <h1 className="font-signika text-[24px] mt-[10px]">{car.name}</h1>
              <p className="font-signika text-[16px]">Expected launched Date: {car.edate}</p>
              <hr />
              <div className="flex justify-between mt-[10px]">
                <button className="flex gap-[8px] items-center justify-center rounded-[6px] mt-[8px] font-signika text-[18px] bg-[#2ECC71] w-full py-[8px]">
                  <CgProfile className="h-[16px] w-[16px]" /> Notify Me When Launched
                </button>
                <img src={car.brandLogo} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* up coming end */}
      {/* recomended start */}
      {/* <section className="bg-[#1C2833] h-[200px]">
            <img src="https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/recommended-img.png" alt="" />
      </section> */}
      {/* recomended end */}
    </section>
  );
};

export default NewProducts;
