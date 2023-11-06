import React, { useEffect, useState } from "react";
import Product from "../NewProducts/Product";
import { cars } from "../../../data/data";

const OurShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="p-4 bg-Cyanblue border-t-2 border-Cyan">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {cars.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default OurShop;
