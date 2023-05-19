import React, { useEffect, useState } from "react";
import Product from "../NewProducts/Product";

const OurShop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="p-10">
        <h2 className="text-center font-display text-4xl">Our Shop</h2>
        <p className="text-center font-myFont mb-10">Explore our vast collection of toys, ranging from classic board games to cutting-edge robotics. Our friendly and knowledgeable staff is ready to assist you in finding the perfect toy for your child's age and interests. Enjoy a fun-filled shopping experience with regular promotions and a dedicated play area for kids.</p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default OurShop;
