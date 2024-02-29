import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='bg-bgHome w-screen h-screen'>

        <Navbar />

        <div className='flex justify-center items-center pt-28'>
            <div className='w-[60%] flex flex-col justify-center text-white pl-44 pr-52'>
                <h2 className='text-[28px]'>SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className='text-[120px] tracking-wider'>SPACE</h1>
                <p className='text-[18px]'>Let's face it, if you want to go to space, you might as well genuinely go to outer space and not kind of hover on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className='w-[30%] flex justify-start items-center'>
                <div className='bg-white w-[250px] h-[250px] rounded-full flex justify-center items-center shadow-lg'>

                    <h1 className='text-black text-xl'>EXPLORE</h1>

                </div>
            </div>
        </div>

    </div>
  )
}
