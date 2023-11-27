"use client"
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import dynamic from "next/dynamic"
import Checkout from './Checkout'

export const CheckOutDrawer = () => {

    return (

        <div>
            <div className="drawer drawer-end z-[1]">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button btn text-black bg-amber-400 border-amber-400 hover:border-amber-400 hover:text-white hover:bg-amber-400"><CiShoppingCart /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className=" bg-white p-0 min-h-full text-base-content">
                     <Checkout/>
                </div>
            </div>
            </div>
            
        </div>  
    )
};
