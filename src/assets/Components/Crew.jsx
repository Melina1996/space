import React from 'react'
import { Carousel } from 'flowbite-react';
import Data from "../JSON/data.json"

import Navbar from './Navbar'

export default function Crew() {

    // const imagePath = new URL(
    //     //image path starts from HERE
    //     `../img/${Data.crew.images.png}`,
    //     import.meta.url
    //   ).href;

  return (

    <div className='bg-bgCrew bg-cover w-screen h-screen'>
                
        <Navbar />

        <div className="h-[600px]">

            <Carousel slide={false}>
            {Data.crew.map((element, id) => {
                    return (
                        <div className="h-[100%] flex items-start justify-center bg-none text-white">
                            
                            <div className='w-[50%] pl-32 flex justify-center items-center'>

                                <div className='flex flex-col justify-center items-start w-[80%]'>

                                <h1 className='text-[25px] text-white pb-32'><span className='text-[#808080]'>02</span> MEET YOUR CREW</h1>


                                    <h1 className='text-[35px]'>{element.role.toUpperCase()}</h1>
                                    <p className='text-[45px]'>{element.name.toUpperCase()}</p>
                                    <p className='text-[18px]'>{element.bio}</p>

                                </div>

                                
                            </div>

                            <div className='w-[50%] flex justify-center items-center'>

                                <div className='w-[100%] flex justify-center items-end'>

                                    <img src={ new URL(`../img/${element.images.png}`, import.meta.url).href} alt="" className='w-[55%] h-[55%]' />

                                </div>

                            </div>
                        </div>
                    );
                })}
            </Carousel>
    
        </div>


    </div>
  )
}
