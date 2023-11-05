const Banner = () => {
  return (
    // design block
    <section className="pb-40 bg-Cyanblue">
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
  );
};

export default Banner;
