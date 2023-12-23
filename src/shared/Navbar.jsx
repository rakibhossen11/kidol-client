import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {
  CiShoppingTag,
  CiHeart,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

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
      <div className="md:flex md:justify-between md:items-center bg-[#FDFEFE] md:h-[80px] px-[10px] md:px-[40px]">
        <img
          src="https://www.drivco-wp.egenslab.com/wp-content/plugins/drivco-core//inc/theme-options/images/logo/logo.svg"
          alt=""
        />
        <div className="flex items-center">
          <input
            className="rounded-l-[6px]"
            type="text"
            placeholder="Search your products"
          />
          <button className="bg-[#2ECC71] h-full px-[12px] py-[10px] rounded-r-[6px]">
            <CiSearch className="w-[20px] h-[20px] text-white" />
          </button>
        </div>
        <div className="flex gap-[16px] text-[#2E4053] py-[10px] md:mt-0">
          <div className="flex gap-[10px] items-center">
            <CiShoppingTag className="w-[20px] h-[20px] text-[#2ECC71]" />
            <p className="font-signika text-[16px]">Sell with us</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <CiHeart className="w-[20px] h-[20px] text-[#2ECC71]" />
            <p className="font-signika text-[16px]">Save</p>
          </div>
          <button className="font-signika text-[16px] bg-[#2ECC71] px-[16px] py-[10px] rounded-[6px]">
            Sign Up
          </button>
        </div>
      </div>
      <hr />
      {/* nav bottom section for mobile */}
      <div onClick={() => setOpen(!open)} className={`md:hidden px-[10px]`}>
        {open ? (
          <div className="md:flex md:justify-between bg-[#ECF0F1] px-[10px] gap-[15px] md:gap-y-0 md:px-[40px] md:h-[60px]"></div>
        ) : (
          <></>
        )}
      </div>
      {/* for pc and tab */}
      <div className="hidden md:flex md:justify-between md:items-center bg-[#FDFEFE] px-[10px] gap-[15px] md:gap-y-0 md:px-[40px] md:h-[60px]">
        <div className="flex gap-[20px]">
          <Link className="font-signika text-[16px]">Home</Link>
          <Link className="font-signika text-[16px]">New Car</Link>
          <Link className="font-signika text-[16px]">Used Car</Link>
          <Link className="font-signika text-[16px]">Contact Us</Link>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex gap-[8px]">
            <CiShoppingCart className="w-[20px] h-[20px] text-[#2ECC71]" />
            <p className="font-signika text-[16px]">Cart</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <FiPhoneCall className="w-[20px] h-[20px] text-[#2ECC71]" />
            <div>
              <p className="font-signika text-[16px]">To More Inquiry</p>
              <h2 className="font-signika text-[20px]">+088 1966 366 745</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
