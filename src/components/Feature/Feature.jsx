import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <>
            <div className='flex gap-2 items-center'>
                <CheckBadgeIcon className="h-6 w-6 text-green-600" />
                {
                    <p className='text-left p-1'>{feature}</p>
                }
            </div>
        </>
    );
};

export default Feature;