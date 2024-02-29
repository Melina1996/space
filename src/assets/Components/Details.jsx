import React from 'react'
import { useParams } from "react-router-dom";
import Data from "../JSON/data.json"

import Navbar from './Navbar';
import NavDestinations from './NavDestinations';

export default function Details() {

    //returns the id of the clicked product that corresponds to the one that has been sent within my link
    let { id } = useParams();

    //select respective Object in my Data JSON with the ID above
    const planet = Data.destinations[id]


    // const imagePath = new URL(
    //     ../../assets/image/${images},
    //     import.meta.url
    //   ).href;


  return (

    <div className='bg-bgDestination bg-cover w-screen h-screen'>

        <Navbar />

        <div className='flex items-center'>

            <div className='w-[50%]'>

                <h1 className='text-[25px] text-white'><span className='text-[#808080]'>01</span> PICK YOUR DESTINATION</h1>

                <img src={                 
                    new URL(`../assets/img/destination/${planet.images.png}`, import.meta.url)
                      .href
                  } className='w-[40px] h-[40px]' alt="" />

            </div>

            <div className='w-[50%] justify-start items-center pr-32 pl-28 text-white'>

                <NavDestinations />

                <h1 className='text-[100px]'>{planet.name.toUpperCase()}</h1>

                <p>{planet.description}</p>

                <hr className="w-[100%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white"/>

                <div className='flex flex-col justify-center items-center gap-2'>

                    <p className='text-[13px]'>EST. TRAVEL TIME</p>

                    <p className='text-[20px]'>{planet.travel.toUpperCase()}</p>

                </div>


            </div>


        </div>




    </div>

  )
}
