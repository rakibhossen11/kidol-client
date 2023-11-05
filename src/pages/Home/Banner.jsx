const Banner = () => {
  return (
    // design block
    <section className="mb-40">
      {/* hero section */}
      <div className="px-6 py-8 text-center md:px-12 lg:my-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-16 text-5xl font-Ubuntuu tracking-tight md:text-6xl xl:text-7xl">
                The best offer <br />
                <span className="text-[#003580]">for your child</span>
              </h1>
            </div>
            <div className="mb-12 lg:mb-0">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/017.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="hero bg-base-200 py-10">
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4">
    //     <div>
    //       <div className="carousel w-full">
    //         <div id="slide1" className="carousel-item relative w-full">
    //           <img
    //             src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=400"
    //             className="w-full"
    //           />
    //           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //             <a href="#slide4" className="btn btn-circle">
    //               ❮
    //             </a>
    //             <a href="#slide2" className="btn btn-circle">
    //               ❯
    //             </a>
    //           </div>
    //         </div>
    //         <div id="slide2" className="carousel-item relative w-full">
    //           <img
    //             src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400"
    //             className="w-full"
    //           />
    //           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //             <a href="#slide1" className="btn btn-circle">
    //               ❮
    //             </a>
    //             <a href="#slide3" className="btn btn-circle">
    //               ❯
    //             </a>
    //           </div>
    //         </div>
    //         <div id="slide3" className="carousel-item relative w-full">
    //           <img
    //             src="https://images.pexels.com/photos/1157417/pexels-photo-1157417.jpeg?auto=compress&cs=tinysrgb&w=400"
    //             className="w-full"
    //           />
    //           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //             <a href="#slide2" className="btn btn-circle">
    //               ❮
    //             </a>
    //             <a href="#slide4" className="btn btn-circle">
    //               ❯
    //             </a>
    //           </div>
    //         </div>
    //         <div id="slide4" className="carousel-item relative w-full">
    //           <img
    //             src="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&w=400"
    //             className="w-full"
    //           />
    //           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //             <a href="#slide3" className="btn btn-circle">
    //               ❮
    //             </a>
    //             <a href="#slide1" className="btn btn-circle">
    //               ❯
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center justify-center">
    //       <h1 className="text-5xl font-bold">Mega Offer on Sports Car!</h1>
    //       <p className="py-6">
    //         Available all kinds of sports car on our website. Get  offer new user .
    //       </p>
    //       <button className="bg-orange-400 px-6 py-4 rounded-md text-xl text-white font-myFont w-full">Get Start</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
