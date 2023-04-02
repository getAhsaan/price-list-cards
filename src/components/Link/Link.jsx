import React from 'react';

const Link = ({ route }) => {
    return (
        <div>
            <li className='mr-12 hover:bg-purple-600 p-1 md:px-2'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;