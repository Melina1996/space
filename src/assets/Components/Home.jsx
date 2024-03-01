import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='bg-bgHome w-[100vw] h-[100vh]'>

        <div className='h-[20%]'>

        <Navbar />

        </div>

        <div className='flex flex-col md:flex-row md:justify-end justify-start items-end h-[80%] md:pb-20'>
            
            <div className='md:w-[50%] w-[100%] flex md:justify-end justify-center items-center text-white'>

                <div className='md:w-[80%] w-[100%] flex flex-col md:justify-start justify-center items-center md:items-start'>

                    <h2 className='xl:text-[35px] text-[25px] md:text-[25px] font-barlow'>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className='xl:text-[150px] text-[100px] md:text-[80px] tracking-wider font-nanum'>SPACE</h1>
                    <p className='xl:text-[18px] text-[15px] md:pr-10 text-center'>Let's face it, if you want to go to space, you might as well genuinely go to outer space and not kind of hover on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>

                </div>
                
            </div>
            <div className='md:w-[50%] w-[100%] flex justify-center items-end md:h-[100%] pb-10'>
                
                <div className='bg-white xl:w-[280px] xl:h-[280px] lg:w-[200px] lg:h-[200px] w-[180px] h-[180px] rounded-full flex justify-center items-center shadow-lg'>

                    <h1 className='text-black text-xl font-nanum'>EXPLORE</h1>

                </div>
            </div>
        </div>

    </div>
  )
}
