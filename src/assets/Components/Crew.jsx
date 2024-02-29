import React from 'react'
import { Carousel } from 'flowbite-react';
import Data from "../JSON/data.json"

import Navbar from './Navbar'

export default function Crew() {

  return (

    <div className='bg-bgCrew bg-cover w-screen h-screen'>
                
        <div className='h-[20%]'>

            <Navbar />

        </div>

        <div className='h-[10%] flex justify-center items-center'>

            <div className='w-[80%] flex justify-start items-center'>

                <h1 className='text-[28px] text-white font-barlow tracking-widest'><span className='text-[#808080]'>02</span> MEET YOUR CREW</h1>

            </div>

        </div>

        <div className="h-[70%] pb-10">

            <Carousel slide={false}>
            {Data.crew.map((element, id) => {
                    return (
                        <div className="h-[100%] flex items-start justify-center bg-none text-white">
                            
                            <div className='w-[50%] h-[100%] flex justify-center items-center'>

                                <div className='h-[100%] flex flex-col justify-center items-start w-[60%]'>

                                    <h1 className='text-[30px] font-nanum text-[#9EA4BDff]'>{element.role.toUpperCase()}</h1>
                                    <p className='text-[45px] font-nanum'>{element.name.toUpperCase()}</p>
                                    <p className='text-[18px] text-[#9EA4BDff]'>{element.bio}</p>

                                </div>

                                
                            </div>

                            <div className='w-[50%] flex justify-center items-center'>

                                <div className='w-[100%] flex justify-start items-end'>

                                    <img src={new URL(`../img/${element.images.png}`, import.meta.url).href} alt="" className='w-[55%] h-[55%]' />

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
