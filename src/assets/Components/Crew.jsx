import React from 'react'
import Logo from "../img/logo.svg"
import { Carousel } from 'flowbite-react';
import Data from "../JSON/data.json"

import Navbar from './Navbar'

export default function Crew() {
  return (

    <div className='bg-bgCrew bg-cover w-screen h-screen'>
                
        <Navbar />

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">

            <Carousel slide={false}>
            {Data.crew.map((element, id) => {
                    return (
                        <div className="flex h-full items-center justify-center bg-none text-white">
                            <div className='w-[50%] pl-32'>
                                <h1 className='text-[40px]'>{element.role.toUpperCase()}</h1>
                                <p className='text-[55px]'>{element.name.toUpperCase()}</p>
                                <p className='text-[18px]'>{element.bio}</p>
                                
                            </div>

                            <div className='w-[50%] flex justify-center items-center'>
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
    
        </div>


    </div>
  )
}
