import React, { useEffect, useState } from "react";

const Gellery = () => {
  const [brand,setBrand] = useState([]);

  useEffect(() =>{
    fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  const featuredata = [
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Audi-Logo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-01.svg'
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/bmw.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-02-1.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Ferrari-Logo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-03.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/10/hyundai.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-02-1.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Jeep-Logo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-02-1.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Mercedes-Logo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-01.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Mask-grou.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-03.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/10/sedan.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-03.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Suzuki-Logo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-03.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Tata-Logo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/10/body-10.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/TeslaLogo.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-01.svg',
    },
    {
      brandlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/Toyota.svg',
      carlogo: 'https://www.drivco-wp.egenslab.com/wp-content/uploads/2023/09/body-03.svg',
    },
  ]

  return (
    <section className="px-[50px] my-[100px]">
      <div className="grid grid-cols-6 gap-[20px]">
      {
          featuredata.map((brand) => 
          <div className="flex flex-col justify-center items-center h-[180px] gap-y-[20px] bg-[#ECF0F1] rounded-[6px] hover:bg-[#85C1E9]">
              <img src={brand.brandlogo} alt="" />
              <img src={brand.carlogo} alt="" />
          </div>)
      }
      </div>
      <p className="font-signika text-[18px] text-center mt-[20px]">There has 30+ Brand Category Available View More</p>
    </section>
  );
};

export default Gellery;
