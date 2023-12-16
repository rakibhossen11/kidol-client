import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.webp";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { RiHomeGearLine } from "react-icons/ri";
import {
  IoPhonePortraitOutline,
  IoWatchOutline,
  IoPersonOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { FaLaptop, FaDesktop, FaCartPlus } from "react-icons/fa";
import { IoIosDesktop } from "react-icons/io";
import { HiTableCells } from "react-icons/hi2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.photoURL)

  const handleLogOut = () => {
    logOut()
      .then((res) => {})
      .then((err) => console.log(err));
  };

  const navItems = (
    <>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">ChildZone</Link>
      </li>
      <li>
        <Link to="/myToys">KidsWorld</Link>
      </li>
      <li>
        <Link to="/addToys">Create</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <section className="">
      {/* nav top section */}
      <div className="md:flex md:justify-between md:items-center bg-[#D7DBDD] md:h-[80px] px-[10px] md:px-[40px]">
        <h3 className="font-Bebas text-[44px] text-[#2E4053]">K-Shop</h3>
        <div>
          <input
            className="rounded-l-[6px]"
            type="text"
            placeholder="Explore Kshop"
          />
          <button className="bg-[#2E4053] text-[#ECF0F1] font-Ubuntuu px-[12px] py-[8px] rounded-r-[6px]">
            Search
          </button>
        </div>
        <div className="flex gap-[16px] text-[#2E4053] py-[10px] md:mt-0">
          <FaCartPlus className="h-[24px] w-[24px]" />
          <IoPersonOutline className="h-[24px] w-[24px]" />
        </div>
      </div>
      {/* nav bottom section for mobile */}
      <div onClick={() => setOpen(!open)} className={`md:hidden px-[10px]`}>
        {open ? (
          <div className="md:flex md:justify-between bg-[#ECF0F1] px-[10px] gap-[15px] md:gap-y-0 md:px-[40px] md:h-[60px]">
            <IoClose  className="h-[24px] w-[24px]" />
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <RiHomeGearLine className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">All</h4>
            </div>
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <IoPhonePortraitOutline className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">Phone</h4>
            </div>
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <FaLaptop className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">Laptop</h4>
            </div>
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <FaDesktop className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">Desktop</h4>
            </div>
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <IoWatchOutline className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">Watch</h4>
            </div>
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <IoIosDesktop className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">TV</h4>
            </div>
            <div className="flex text-[#2E4053] items-center gap-[6px]">
              <HiTableCells className="h-[18px] w-[18px]" />
              <h4 className="font-Ubuntuu text-[18px]">Accesories</h4>
            </div>
          </div>
        ) : (
          <IoMenu className="h-[24px] w-[24px]" />
        )}
      </div>
      {/* for pc and tab */}
      <div className="hidden md:flex md:justify-between bg-[#ECF0F1] px-[10px] gap-[15px] md:gap-y-0 md:px-[40px] md:h-[60px]">
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <RiHomeGearLine className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">All</h4>
        </div>
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <IoPhonePortraitOutline className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">Phone</h4>
        </div>
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <FaLaptop className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">Laptop</h4>
        </div>
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <FaDesktop className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">Desktop</h4>
        </div>
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <IoWatchOutline className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">Watch</h4>
        </div>
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <IoIosDesktop className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">TV</h4>
        </div>
        <div className="flex text-[#2E4053] items-center gap-[6px]">
          <HiTableCells className="h-[18px] w-[18px]" />
          <h4 className="font-Ubuntuu text-[18px]">Accesories</h4>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
