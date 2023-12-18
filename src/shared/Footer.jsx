import { FaPhoneAlt, } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/logo/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#17202A] mt-[40px]">
      <section className="grid grid-cols-5 py-[100px] px-[50px]">
        <div>
          <h2 className="font-Noto text-[20px] text-white">About Company</h2>
          <div className="mt-[20px]">
          <p className="font-Nunito text-[16px] text-[#B3B6B7]">About Us</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Return & Exchange</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Refund Policy</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Reviews</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">FAQ’s</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Contact Us</p>
          </div>
        </div>
        <div>
          <h2 className="font-Noto text-[20px] text-white">Search & Explore</h2>
          <div className="mt-[20px]">
          <p className="font-Nunito text-[16px] text-[#B3B6B7]">Used Cars</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">New Cars</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Auction Cars</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Sell My Car</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Shop Now</p>
          </div>
        </div>
        <div>
          <h2 className="font-Noto text-[20px] text-white">Cars By Brands</h2>
          <div className="mt-[20px]">
          <p className="font-Nunito text-[16px] text-[#B3B6B7]">BMW</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Ferrari</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Mercedes</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Suzuki</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">TATA</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Toyota</p>
          </div>
        </div>
        <div>
          <h2 className="font-Noto text-[20px] text-white">Cars By Location</h2>
          <div className="mt-[20px]">
          <p className="font-Nunito text-[16px] text-[#B3B6B7]">Dhaka</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">New Delhi</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Kualalumpur</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Panama City</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Sydney City</p>
          <p className="font-Nunito text-[16px] text-[#B3B6B7] mt-[10px]">Melbourne City</p>
          </div>
        </div>
        <div>
          <h2 className="font-Noto text-[20px] text-white">Download App</h2>
          <div className="mt-[20px]">
          
          </div>
        </div>
      </section>
      {/*  */}
      <section className="grid grid-cols-5 items-center justify-center gap-[10px] px-[50px] pb-[50px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center">
        <FaPhoneAlt className="w-[44px] h-[44px] text-[#2ECC71] mr-[15px]" />
        <div>
          <p className="font-Noto text-[16px] text-[#B3B6B7]">To More Inquiry</p>
          <h3 className="font-Noto text-[24px] text-[#2ECC71]">+880 1966 366 745</h3>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <IoMdMail className="w-[44px] h-[44px] text-[#2ECC71] mr-[15px]" />
        <div>
          <p className="font-Noto text-[16px] text-[#B3B6B7]">To Send Mail</p>
          <h3 className="font-Noto text-[24px] text-[#2ECC71]">info@gmail.com</h3>
        </div>
        </div>
        <div className="flex">
          <h3 className="font-Noto text-[16px] text-[#B3B6B7]">Advertise With Us</h3>
        </div>
        <div className="flex">
          <h3 className="font-Noto text-[16px] text-[#B3B6B7]">Our Sitemap</h3>
        </div>
      </section>
      <section>
        <p className="font-Noto text-[16px] text-[#B3B6B7] mx-[50px] pb-[20px]">Copyright 2023 DRIVCO | Design By DigiTech</p>
      </section>
    </footer>
  );
};

export default Footer;
