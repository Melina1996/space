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

    const imagePath = new URL(
        //image path starts from HERE
        `../img/${planet.images.png}`,
        import.meta.url
      ).href;


  return (

    <div className='bg-bgDestination bg-cover w-[100vw] h-[100vh]'>

        <div className='h-[20%]'>

            <Navbar />

        </div>

        <div className='h-[10%] flex justify-center items-center'>

            <div className='w-[80%] flex justify-start items-center'>

                <h1 className='text-[28px] text-white font-barlow tracking-widest'><span className='text-[#808080]'>01</span> PICK YOUR DESTINATION</h1>

            </div>

        </div>

        <div className='flex items-center justify-center h-[70%]'>

            <div className='w-[50%] flex flex-col justify-center items-center'>

                <div className='flex flex-col flex-start gap-10'>

                    <img src={imagePath} className='w-[400px] h-[400px]' alt="" />

                </div>

            </div>

            <div className='w-[50%] justify-start items-center pr-32 pl-28 text-white'>

                <div className='h-[180px]'>

                    <NavDestinations />

                    <h1 className='text-[100px] font-nanum'>{planet.name.toUpperCase()}</h1>

                </div>
                

                <p className='h-[120px]'>{planet.description}</p>

                <hr className="w-[100%] h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white"/>

                <div className='flex flex-col justify-center items-center gap-2'>

                    <p className='text-[15px] font-barlow'>EST. TRAVEL TIME</p>

                    <p className='text-[22px] font-nanum'>{planet.travel.toUpperCase()}</p>

                    <p>{planet.images.type}</p>

                </div>


            </div>


        </div>




    </div>

  )
}
