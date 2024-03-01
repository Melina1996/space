import React from 'react'
import { Link, NavLink } from "react-router-dom"


import Data from "../JSON/data.json"


export default function NavDestinations() {
  return (
    <div>

        <nav id="nav-destination" className='flex max-[426px]:justify-center max-[426px]:items-center md:justify-start lg:gap-10 gap-5'>
                {Data.destinations.map((element, id) => {
                    return (
                        <div key={id}>
                            {/* "to:" hier muss der Link definiert werden, zu welchem wir navigieren möchten. */}
                            {/* 2 parts: (1) pathname that has been defined in my MAIN, (2) we pass the key of our object as parameter, in order to be able to then access further information stocked in this object */}
                            {/* define link: "/details/corresponding ID" */}
                                <NavLink key={id}
                                className="text-white tracking-widest"
                                to={`/details/${id}`}
                                >
                                {element.name.toUpperCase()}
                                </NavLink>
                        </div>
                    );
                })}
            </nav>

    </div>
  )
}
