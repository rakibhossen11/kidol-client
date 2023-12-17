import { FaFacebookF,FaYoutube,FaTwitter, } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <div className="bg-[#D0D3D4] px-[100px] pt-[70px] pb-[40px]">
        <Link className="" to="/">
          {/* <FontAwesomeIcon className="h-10 w-full text-sky-600" icon={faCarSide} />  */}
          <h2 className="font-Bebas text-[44px]">K-Shop</h2>
        </Link>
        <p className="font-Bebas text-[18px]">Rakib Industries Ltd.<br/>Providing reliable products since 2023</p>
        </div>
      <footer className="footer px-[100px] pt-[70px] pb-[40px] bg-[#979A9A]">
        <div>
          <span className="font-Bebas text-[24px] pb-[10px]">Services</span>
          <p className="font-Bebas text-[16px]">Branding</p>
          <p className="font-Bebas text-[16px]">Design</p>
          <p className="font-Bebas text-[16px]">Marketing</p>
          <p className="font-Bebas text-[16px]">Advertisement</p>
        </div>
        <div>
        <span className="font-Bebas text-[24px] pb-[10px]">Company</span>
          <p className="font-Bebas text-[16px]">About us</p>
          <p className="font-Bebas text-[16px]">Contact</p>
          <p className="font-Bebas text-[16px]">Jobs</p>
          <p className="font-Bebas text-[16px]">Press kit</p>
        </div>
        <div>
        <span className="font-Bebas text-[24px] pb-[10px]">Subscribe to Connect</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="font-Bebas">Enter your email address</span>
            </label>
            <div className="md:flex">
              <input
                type="text"
                placeholder="username@kshop.com"
                className="input input-bordered w-full pr-16 font-Bebas"
              />
              <button className="bg-[#2E4053] font-Bebas text-white px-[16px] rounded-[4px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-flow-col gap-4 mt-3">
          <FaFacebookF className="w-[24px] h-[24px]"/>
          <FaYoutube className="w-[24px] h-[24px]"/>
          <FaTwitter className="w-[24px] h-[24px]"/>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center font-Bebas p-[20px] bg-[#F7F9F9] text-black">
        <div>
          <p>Copyright © 2023 - All right reserved by Kshop Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
