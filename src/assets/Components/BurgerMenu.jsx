import React from 'react'
import { NavLink } from 'react-router-dom'

import Close from "../img/icon-close.svg"

export default function BurgerMenu(props) {
  return (
    <div className='relative flex justify-center items-center w-[100%]'>

            <nav id="my-nav-burger">
                <ul className="flex flex-col gap-12 justify-center items-center">
                <li className="hover:text-[#808080] text-black">
                    {/* we use Link-Tag instead of "a" */}
                    <NavLink exact="true" to={`/`}>00 HOME</NavLink>
                </li>
                <li className="hover:text-[#808080] text-black">
                    {/* I put here directly the first page of my details */}
                    <NavLink exact="true" to={`/details/0`}>01 DESTINATION</NavLink>
                </li>
                <li className="hover:text-[#808080] text-black">
                    <NavLink exact="true" to={`/crew`}>02 CREW</NavLink>
                </li>
                <li className="hover:text-[#808080] text-black">
                    <NavLink exact="true" to={`/technology`}>03 TECHNOLOGY</NavLink>
                </li>
                </ul>

            </nav>

        <button onClick={()=> props.setBurger(false)}><img src={Close} className='absolute top-5 right-5' alt="" /></button>

    </div>
  )
}
