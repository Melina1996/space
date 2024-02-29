import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Navbar from './Navbar'
import NavDestinations from './NavDestinations'

export default function Destination() {
  return (
    <div className='bg-bgDestination bg-cover w-[100vw] h-[100vh]'>

        <Navbar />

        <div className='flex'>

            <div className='w-[50%]'>

            </div>

            <div className='w-[50%]'>

                <NavDestinations />
                

            </div>


        </div>


    </div>
  )
}
