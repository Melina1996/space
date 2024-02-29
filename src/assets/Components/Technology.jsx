import React from 'react'
import { useState } from "react"

import Navbar from './Navbar'
import TechDetails from './TechDetails'
import Data from "../JSON/data.json"

import Launch from "../img/image-launch-vehicle-portrait.jpg"
import Capsule from "../img/image-space-capsule-portrait.jpg"
import Port from "../img/image-spaceport-portrait.jpg"

export default function Technology() {

    const[buttonClicked,setButton]=useState(1)

  return (

    <div className='bg-bgTech bg-cover w-screen h-screen'>

        <Navbar />

        <div className='flex items-center justify-center'>

            <div className='w-[50%] flex flex-col justify-center items-center'>

                    <h1 className='text-[25px] text-white'><span className='text-[#808080]'>03</span> SPACE LAUNCH 101</h1>

                        <div className='flex flex-col gap-5'>

                            <button onClick={()=>setButton(1)} className='w-[80px] h-[80px] bg-white rounded-full text-black font-semibold text-xl'><p>1</p></button>
                        
                            <button onClick={()=>setButton(2)}  className='w-[80px] h-[80px] bg-white rounded-full text-black font-semibold text-xl'><p>2</p></button>

                            <button onClick={()=>setButton(3)}  className='w-[80px] h-[80px] bg-white rounded-full text-black font-semibold text-xl'><p>3</p></button>

                        </div>

            </div>

            <div className='w-[50%]'>

                <TechDetails img={buttonClicked == "1" ? Launch : buttonClicked == "2" ? Capsule : buttonClicked == "3" ? Port : ""} name={buttonClicked == "1" ? Data.technology[0].name : buttonClicked == "2" ? Data.technology[1].name : buttonClicked == "3" ? Data.technology[2].name : ""} description={buttonClicked == "1" ? Data.technology[0].description : buttonClicked == "2" ? Data.technology[1].description : buttonClicked == "3" ? Data.technology[2].description : ""}/>

            </div>

        
        </div>

            


    </div>
  )
}
