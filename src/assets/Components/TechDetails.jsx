import React from 'react'

export default function TechDetails(props) {



  return (
    <div className='flex w-[100%] justify-center items-center'>

        <div className='flex justify-center items-center w-[50%]'>

            <div className='flex flex-col w-[80%]'>

                <p className='text-white font-barlow'>THE TERMINOLOGY...</p>

                <h1 className='text-[45px] font-nanum text-white'>{props.name.toUpperCase()}</h1>

                <p className='pt-10'>{props.description}</p>

            </div>


        </div>

        <div className='flex w-[50%] justify-end items-end'>

            <img src={props.img} alt="" className='w-[80%]' />

        </div>


    </div>
  )
}
