import React from 'react'
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import Star from "../img/logo.svg"
import Burger from "../img/icon-hamburger.svg"

import BurgerMenu from './BurgerMenu'

export default function Navbar() {

    const[burger,setBurger]=useState(false)

  return (
    <div className='flex justify-between items-center pl-10 font-barlow lg:text-lg relative pt-5'>

        <img src={Star} className='w-[50px] h-[50px] md:w-[40px] md:h-[40px] max-[426px]:absolute max-[426px]:top-7' alt="star"/>

        <hr className="xl:w-[380px] lg:w-[270px] md:w-[150px] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white"/>

        {/* use "NavLink" in order to get active state and change style correspondingly */}
        <div className='xl:w-[900px] lg:w-[600px] md:w-[500px] nav-bg pt-8 pb-8 relative hidden md:block shadow-lg'>
            <nav id="my-nav">
                <ul className="flex gap-12 justify-center items-center">
                <li className="hover:text-[#808080] text-white">
                    {/* we use Link-Tag instead of "a" */}
                    <NavLink exact="true" to={`/space`}>00 HOME</NavLink>
                </li>
                <li className="hover:text-[#808080] text-white">
                    {/* I put here directly the first page of my details */}
                    <NavLink exact="true" to={`/details/0`}>01 DESTINATION</NavLink>
                </li>
                <li className="hover:text-[#808080] text-white">
                    <NavLink exact="true" to={`/crew`}>02 CREW</NavLink>
                </li>
                <li className="hover:text-[#808080] text-white">
                    <NavLink exact="true" to={`/technology`}>03 TECHNOLOGY</NavLink>
                </li>
                </ul>

        </nav>
        
      </div>
      <button onClick={()=> setBurger(true)}><img src={Burger} className="absolute top-10 right-10 w-[30px] h-[25px] md:hidden" alt="" /></button>


        {
            burger ? 
            
            <div className='absolute w-[100%] bg-white h-[400px] top-0 left-0 flex justify-center'>

                <BurgerMenu setBurger={setBurger}/> 

            </div>

            : ""


        }



    </div>
  )
}
