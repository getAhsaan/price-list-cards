import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Product Details', path: '/products/:id' },
    ];

    return (
        <nav className='bg-purple-400'>
            <div onClick={() => setOpen(!open)} className='cursor-pointer md:hidden'>
                <span>{open ? <Bars3Icon className="h-6 w-6 text-purple-500" /> : <XMarkIcon className="h-6 w-6 text-purple-500" />}</span>
            </div>
            <ul className={`md:flex absolute md:static duration-500 bg-purple-400 p-8 ${open ? 'top-6' : '-top-96'}`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav >
    );
};

export default Navbar;