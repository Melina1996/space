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

    <div className='bg-bgTech bg-cover w-[100vw] h-[100vh]'>


        <div className='h-[20%]'>

        <Navbar />

        </div>

        <div className='h-[10%] flex justify-center items-center'>

            <div className='w-[80%] flex justify-start items-center'>

                <h1 className='text-[28px] text-white font-barlow tracking-widest'><span className='text-[#808080]'>03</span> SPACE LAUNCH 101</h1>

            </div>

        </div>

        <div className='h-[70%] flex items-center justify-center'>

            <div className='w-[15%] flex justify-end items-center'>

                <div className='flex flex-col items-start gap-5'>

                        <button onClick={()=>setButton(1)} className={`${buttonClicked == "1" ? ("text-black bg-white") : ("bg-none text-white")} w-[80px] h-[80px] rounded-full border-white border-2 border-solid first-letter:font-semibold text-xl`}><p>1</p></button>

                        <button onClick={()=>setButton(2)} className={`${buttonClicked == "2" ? ("text-black bg-white") : ("bg-none text-white")} w-[80px] h-[80px] rounded-full border-white border-2 border-solid first-letter:font-semibold text-xl`}><p>2</p></button>

                        <button onClick={()=>setButton(3)} className={`${buttonClicked == "3" ? ("text-black bg-white") : ("bg-none text-white")} w-[80px] h-[80px] rounded-full border-white border-2 border-solid first-letter:font-semibold text-xl`}><p>3</p></button>

                </div>

            </div>

            <div className='w-[85%]'>

                <TechDetails img={buttonClicked == "1" ? Launch : buttonClicked == "2" ? Capsule : buttonClicked == "3" ? Port : ""} name={buttonClicked == "1" ? Data.technology[0].name : buttonClicked == "2" ? Data.technology[1].name : buttonClicked == "3" ? Data.technology[2].name : ""} description={buttonClicked == "1" ? Data.technology[0].description : buttonClicked == "2" ? Data.technology[1].description : buttonClicked == "3" ? Data.technology[2].description : ""}/>

            </div>

        
        </div>

            


    </div>
  )
}
