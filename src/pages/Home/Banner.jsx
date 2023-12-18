import { IoIosSpeedometer } from "react-icons/io";
import { FaCar,FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Banner = () => {
  return (
    <section className="">
      <section className="px-[50px] py-[100px] bg-gradient-to-r from-[#A9DFBF] to-[#ECF0F1]">
        <div>
          <p className="font-Noto text-[24px] flex gap-[8px] text-[#2ECC71] tracking-wide">
            Fastest Speed <IoIosSpeedometer className="w-[30px] h-[30px]" />{" "}
          </p>
          <h3 className="font-hammersmith text-[64px]">
            To Best Way Buy <br /> Dream Car.
          </h3>
          <p className="font-signika text-[24px] text-[#ECF0F1]">
            Car dealerships may sell new cars from one or several <br />{" "}
            manufacturers, as well as used cars from a variety of sources.
          </p>
        </div>
        <div></div>
      </section>
      <section className="md:flex justify-between px-[50px] py-[20px] bg-[#17202A]">
        <div className="flex gap-[10px] items-center">
          <MdOutlinePhonelinkSetup className="h-[30px] w-[30px] text-[#ECF0F1]" />
          <p className="font-signika text-[24px] text-[#ECF0F1]">
            Browse Used a Car
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <FaCar className="h-[30px] w-[30px] text-[#ECF0F1]" />
          <p className="font-signika text-[24px] text-[#ECF0F1]">
          Auction Car
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <AiOutlineSafetyCertificate className="h-[30px] w-[30px] text-[#ECF0F1]" />
          <p className="font-signika text-[24px] text-[#ECF0F1]">
          Browse Offer
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <FaLocationArrow className="h-[30px] w-[30px] text-[#ECF0F1]" />
          <p className="font-signika text-[24px] text-[#ECF0F1]">
          Get In Touch
          </p>
        </div>
      </section>
    </section>
  );
};

export default Banner;
