import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Star from "../img/logo.svg"

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-[150px] pl-5'>

        <img src={Star} className='w-[50px] h-[50px]' alt="star"/>

        <hr className="w-[380px] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white"/>

        {/* use "NavLink" in order to get active state and change style correspondingly */}
        <div className='w-[900px] nav-bg pt-8 pb-8 relative shadow-lg'>
            <nav id="my-nav" className="text-md">
                <ul className="flex gap-12 justify-center items-center">
                <li className="hover:text-[#808080] text-white">
                    {/* we use Link-Tag instead of "a" */}
                    <NavLink exact="true" to={`/`}>00 HOME</NavLink>
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

    </div>
  )
}
