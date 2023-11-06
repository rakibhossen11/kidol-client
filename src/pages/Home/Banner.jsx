import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../../assets/images/car1.jpg';
import banner2 from '../../assets/images/car2.jpg';
import banner3 from '../../assets/images/car3.jpg';

const Banner = () => {
  return (
   <div>
     <Carousel >
        <img src={banner} />
        <img src={banner2} />
        <img src={banner3} />
    </Carousel>
   </div>
    // design block
    // <section style={{
    //   background: `url(${banner})`,
    //   backgroundPosition: "bottom",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    // }} className="h-screen flex flex-col items-center">
    //   {/* hero section */}
    //   <div className="px-6 py-8 text-center md:px-12 lg:text-left"> 
    //     <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
    //       <div className="grid items-center gap-12 lg:grid-cols-2">
    //         <div className="flex items-center justify-center gap-3 flex-col mt-12 lg:mt-0">
    //           {/* <div>
    //             <img className="w-full rounded-lg shadow-lg h-72" src={banner} alt="" />
    //           </div>
    //           <div>
    //             <img className="w-full rounded-lg shadow-lg h-72" src={banner} alt="" />
    //           </div> */}
    //           {/* <h1 className="mb-16 text-5xl font-Ubuntuu tracking-tight md:text-6xl xl:text-7xl">
    //             The best offer <br />
    //             <span className="text-[#003580]">for your child</span>
    //           </h1> */}
    //         </div>
    //         <div className="mb-12 lg:mb-0">
    //           {/* <img
    //             className="w-full rounded-lg shadow-lg"
    //             src={banner}
    //             alt=""
    //           /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Banner;
