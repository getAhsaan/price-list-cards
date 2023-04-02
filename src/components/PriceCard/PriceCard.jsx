import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-300 text-center p-4 flex flex-col justify-between'>
            <div>
                <span className='text-5xl font-extrabold text-purple-800'>{price.price}</span>
                <span className='font-bold text-white'>/mon</span>
                <h2 className='text-xl font-semibold my-4'>{price.name}</h2>
                <p className='text-left text-xl underline text-white font-bold mb-4'>Features : </p>
                {
                    price.features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <div>
                <button className='bg-green-600 w-full p-2 rounded-md text-white font-bold text-xl mt-4'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceCard;