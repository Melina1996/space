import React from 'react'

export default function TechDetails(props) {



  return (
    <div className='flex max-[426px]:flex-col md:flex-row w-[100%] justify-center items-center max-[426px]:gap-4'>

        <div className='flex justify-center items-center lg:w-[50%] md:w-[60%]'>

            <div className='flex flex-col xl:w-[80%] md:w-[90%] max-[426px]:text-center max-[426px]:pt-5 max-[426px]:gap-4 max-[426px]:w-[95%]'>

                <p className='text-white font-barlow'>THE TERMINOLOGY...</p>

                <h1 className='xl:text-[45px] lg:text-[38px] md:text-[35px] text-[30px] font-nanum text-white'>{props.name.toUpperCase()}</h1>

                <p className='lg:pt-2 h-[150px]'>{props.description}</p>

            </div>


        </div>

        <div className='flex lg:w-[50%] md:w-[40%] md:justify-end max-[426px]:justify-center items-end max-[426px]:pb-10 max-[426px]:pt-10'>

            <img src={props.img} alt="" className='w-[80%]' />

        </div>


    </div>
  )
}
