import React from 'react';
import { NavLink } from 'react-router';
import git from '../assets/Vector.png'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className='bg-[#E9E9E9] w-full'> 
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <NavLink to=''>Home</NavLink>
                            <NavLink to=''>Apps</NavLink>
                            <NavLink to=''>Installation</NavLink>

                        </ul>
                    </div>
                    <a className="flex items-center text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img className='w-[40px]' src={logo} alt="" /> HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-[32px] text-[16px] font-medium">
                        <NavLink to=''>Home</NavLink>
                        <NavLink to=''>Apps</NavLink>
                        <NavLink to=''>Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white text-[16px] font-semibold"><img src={git} alt="" /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;