import React, { useEffect, useState } from "react";
import { products } from "../../../data/data";
import Product from "../NewProducts/Product";

const OurShop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="px-[100px] pt-[30px] pb-[70px] bg-Cyanblue border-t-2 border-Cyan">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default OurShop;
