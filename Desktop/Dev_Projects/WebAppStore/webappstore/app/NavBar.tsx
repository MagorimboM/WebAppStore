"use client"

import react from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {CheckOutDrawer } from "./components/Trolley";

const NavBar = () => {

    const links = [

        { label: 'Home', href: '/' },
        { label: 'Products', href: '/store ' },
        { label: 'About', href: '/aboutUs' },
        { label: 'Contact', href: '/contactUs' },
    ]

    return (
        <div className="navbar" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg-amber-400 border-2 border-amber-400 text-black dropdown-content mt-3 z-[2] p-2 shadow rounded-box w-52">
                        <li><a className='hover:text-white' href='/store'>Shop</a></li>
                        <li>
                            <a className='hover:text-white'>More</a>
                            <ul className="p-2">
                                <li><a className='hover:text-white'href='/aboutUs'>About Us</a></li>
                                <li><a className='hover:text-white'href='/contactUs'>Contact Us</a></li>
                            </ul>
                        </li>
                        <li><a className='hover:text-white' href='/'>Home</a></li>
                    </ul>
                </div>
                <a className="btn border-amber-400 hover:border-amber-400 hover:bg-amber-400 hover:text-white text-black bg-amber-400 ">DRNS</a>
            </div>
            <div className="navbar-center text-black font-bold text-lg hidden lg:flex">
                <ul className="menu menu-horizontal z-[1] hover:bg-amber-400 bg-amber-400 rounded-lg px-1">
                    <li><a className='hover:text-white' href='/'>Home</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary className='hover:text-white'>More</summary>
                            <ul className="p-2 bg-amber-400">
                                <li><a className='hover:text-white' href='/contactUs'>Contact Us</a></li>
                                <li><a className='hover:text-white'href='/aboutUs'>About Us</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className='hover:text-white' href='/store'>Shop</a></li>
                </ul>
            </div>
            <div className="navbar-end text-white font-bold">
                <CheckOutDrawer/>
            </div>
        </div >
    )
}

export default NavBar


