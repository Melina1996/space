import React from 'react'

export default function CrewDetails(props) {

  return (

    <div className='h-[250px] flex flex-col justify-center max-[426px]:items-center md:items-start xl:w-[67%] lg:w-[70%] md:w-[75%] w-[90%] md:pl-6 max-[426px]:pt-10'>

            <h1 className='xl:text-[30px] lg:text-[26px] text-[22px] font-nanum text-[#9EA4BDff] max-[426px]:text-center'>{props.role.toUpperCase()}</h1>
            <p className='xl:text-[48px] lg:text-[35px] text-[30px] font-nanum text-white max-[426px]:text-center'>{props.name.toUpperCase()}</p>
            <p className='lg:text-[18px] text-[15px] text-white max-[426px]:text-center leading-6'>{props.bio}</p>

    </div>
  )
}
