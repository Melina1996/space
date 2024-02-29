import React from 'react'

export default function TechDetails(props) {



  return (
    <div className='flex'>

        <div>

            <p>THE TERMINOLOGY...</p>

            <h1>{props.name}</h1>

            <p>{props.description}</p>


        </div>

        <div>

            <img src={props.img} alt="" />

        </div>


    </div>
  )
}
