import React from "react";

const Navbar = () => {
    return (
        <div className = ' justify-between items-center h-24 max text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Pique</h1>
            <ul className="flex">
                <li className="p-4">What we Do</li>
                <li className="p-4">Use</li>
                <li className="p-4">FAQ</li>
            </ul>
        </div>
    )
}

export default Navbar;