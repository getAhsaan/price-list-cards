import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const CardList = () => {
    const [prices, setPrices] = useState([]);


    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold bg-purple-300 p-2 text-center m-4 text-purple-950'>Here is Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-4 m-4'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    >

                    </PriceCard>)
                }
            </div>
        </div>
    );
};

export default CardList;