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

    <div className='lg:bg-bgDestination md:bg-destinationTablet bg-destinationMobile bg-cover w-[100vw] md:h-[100vh]'>

        <div className='md:h-[20%]'>

            <Navbar />

        </div>

        <div className='md:h-[10%] flex justify-center md:justify-start items-center max-[426px]:pt-16 pb-10 md:pb-0'>

            <div className='w-[80%] flex max-[426px]:justify-center items-center'>

                <h1 className='xl:text-[28px] lg:text-[24px] text-[20px] text-white font-barlow tracking-widest md:pb-10'><span className='text-[#808080]'>01</span> PICK YOUR DESTINATION</h1>

            </div>

        </div>

        <div className='flex md:flex-row flex-col items-center justify-center md:h-[70%] gap-10 md:gap-0'>

            <div className='md:w-[50%] md:h-[100%] w-[100%] flex justify-center items-center'>

                <div className='flex flex-col flex-center gap-10 h-[100%] xl:w-[60%] md:pt-10 lg:pt-0'>

                    <img src={imagePath} className='xl:w-[400px] xl:h-[400px] lg:w-[350px] lg:h-[350px] w-[250px] h-[250px]' alt="" />

                </div>

            </div>

            <div className='md:w-[50%] w-[100%] md:h-[100%] justify-start items-center xl:pr-32 xl:pl-28 lg:pr-10 md:pr-10 text-white'>

                <div className='xl:h-[180px] md:h-[150px]'>

                    <NavDestinations />

                    <h1 className='xl:text-[100px] text-[80px] font-nanum max-[426px]:text-center'>{planet.name.toUpperCase()}</h1>

                </div>
                

                <p className='xl:h-[120px] md:h-[100px] md:p-0 p-4 max-[426px]:text-center leading-6 lg:text-[18px] text-[15px]'>{planet.description}</p>

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
