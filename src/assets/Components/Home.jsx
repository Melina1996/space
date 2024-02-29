import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='bg-bgHome w-[100vw] h-[100vh]'>

        <div className='h-[20%]'>

        <Navbar />

        </div>

        <div className='flex justify-end items-end h-[80%] pb-20'>
            
            <div className='w-[50%] flex justify-end items-center text-white'>

                <div className='w-[80%] flex flex-col justify-start'>

                    <h2 className='text-[35px] font-barlow'>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className='text-[150px] tracking-wider font-nanum'>SPACE</h1>
                    <p className='text-[18px] pr-10'>Let's face it, if you want to go to space, you might as well genuinely go to outer space and not kind of hover on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>

                </div>
                
            </div>
            <div className='w-[50%] flex justify-center items-end h-[100%] pb-10'>
                
                <div className='bg-white w-[280px] h-[280px] rounded-full flex justify-center items-center shadow-lg'>

                    <h1 className='text-black text-xl font-nanum'>EXPLORE</h1>

                </div>
            </div>
        </div>

    </div>
  )
}
