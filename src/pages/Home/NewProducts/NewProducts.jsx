import React, { useEffect, useState } from 'react';
import Product from './Product';

const NewProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://kidol-server.vercel.app/toys')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='text-center font-display text-4xl'>New Products</h1>
            <p className='text-center font-myFont'>We are thrilled to present an exciting array of toys that will ignite the imagination and bring endless joy to children of all ages. Whether you're searching for educational toys, interactive games, or adorable plush companions, our latest collection is sure to captivate young hearts and minds.</p>
            <div className='grid grid-cols-3 gap-6 mt-10'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product> )
                }
            </div>
        </div>
    );
};

export default NewProducts;