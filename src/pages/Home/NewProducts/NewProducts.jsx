import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://kidol-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-10 mx-auto">
      <h1 className="text-center font-display text-4xl">Shop By Category</h1>
      <p className="text-center font-myFont">
        We are thrilled to present an exciting array of toys that will ignite
        the imagination and bring endless joy to children of all ages. Whether
        you're searching for educational toys, interactive games, or adorable
        plush companions, our latest collection is sure to captivate young
        hearts and minds.
      </p>
      <div className="flex items-center justify-center mt-10">
        <Tabs>
          <div className="flex items-center justify-center mt-10">
            <TabList className="flex mb-10 gap-3">
              <Tab className="btn btn-outline btn-warning font-myFont text-xl">
                Regular Car
              </Tab>
              <Tab className="btn btn-outline btn-warning font-myFont text-xl">
                Sports Car
              </Tab>
              <Tab className="btn btn-outline btn-warning font-myFont text-xl">
                Truck
              </Tab>
            </TabList>
          </div>

          <TabPanel className=" mt-10">
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <Product key={product._id} product={product}
                ></Product>
              ))}
            </div>
          </TabPanel>
          <TabPanel className=" mt-10">
          <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <Product key={product._id} product={product}
                ></Product>
              ))}
            </div>
          </TabPanel>
          <TabPanel className=" mt-10">
          <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <Product key={product._id} product={product}
                ></Product>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default NewProducts;
