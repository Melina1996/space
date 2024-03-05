import React from "react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import Data from "../JSON/data.json";

import Navbar from "./Navbar";
import CrewDetails from "./CrewDetails";

import Douglas from "../img/image-douglas-hurley.png";
import Anousheh from "../img/image-anousheh-ansari.png";
import Mark from "../img/image-mark-shuttleworth.png";
import Victor from "../img/image-victor-glover.png";

export default function Crew() {
  const [clickBullet, setBullet] = useState("Douglas");

  //useState muss per default auf "0" stehen
  let [current, setCurrent] = useState(0);

  function previousSlide() {
    if (current === 0) setCurrent(Data.crew.length - 1);
    else setCurrent(current - 1);
  }

  function nextSlide() {
    if (current === Data.crew.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  return (
    <div className="lg:bg-bgCrew md:bg-crewTablet bg-crewMobile bg-cover bg-center w-[100vw] md:h-[100vh] relative">
      
      <div className="h-[20%]">
        <Navbar />
      </div>

      <div className="h-[10%] flex justify-center items-center">
        <div className="w-[80%] flex max-[426px]:justify-center items-center">
          <h1 className="xl:text-[28px] lg:text-[24px] text-[20px] text-white font-barlow tracking-widest max-[426px]:pt-16">
            <span className="text-[#808080]">02</span> MEET YOUR CREW
          </h1>
        </div>
      </div>

      <div className="w-auto h-[70%] flex flex-wrap flex-col justify-center items-center overflow-hidden">
        
        <div
          className="flex transition ease-out duration-100"
          style={{
            //each div has an index and all the divs together make the 100%, so each div's index * 25% makes each div appear 
            transform: `translateX(-${current * 25}%)`,
          }}
        >

          {Data.crew.map((element, id) => {
            return (
              //each div takes the width of the whole screen
              <div className="flex md:flex-row flex-col w-screen">

                <div className="md:w-[50%] max-[426px]:w-[100%] flex justify-center items-center">
                  <CrewDetails role={element.role} bio={element.bio} name={element.name}/>
                </div>

                <div className="w-[50%] md:w-[50%] max-[426px]:w-[100%] flex justify-center items-center max-[426px]:pb-20 max-[426px]:pt-10">

                <img
                className="rounded md:w-[50%] max-[426px]:w-[60%]"
                src={
                  new URL(
                    //image path starts from HERE
                    `../img/${element.images.png}`,
                    import.meta.url
                  ).href
                }
                alt=""
              />

                </div>

              </div>
            );
          })}
        </div>

        <div className="absolute xl:bottom-16 bottom-10 flex md:justify-start max-[426px]:justify-center xl:pl-36 lg:pl-24 md:pl-[75px] gap-3 w-full">
          {Data.crew.map((element, id) => {
            console.log(element);
            return (
              //tertinary condition: bg-color changes when slide active -> current is == id
              <div
                onClick={() => setCurrent(id)}
                id={"circle" + 1}
                className={`rounded-full w-5 h-5 cursor-pointer ${
                  id == current ? "bg-white" : "bg-[#808080]"
                }`}
              ></div>
            );
          })}
        </div>

        {/* wenn mit Slug machen möchte: */}
        {/* <div className='md:w-[50%] w-[100%] flex flex-col justify-start items-center gap-10'>

                <CrewDetails name={clickBullet == "Douglas" ? Data.crew[0].name : clickBullet == "Mark" ? Data.crew[1].name : clickBullet == "Victor" ? Data.crew[2].name : clickBullet == "Anousheh" ? Data.crew[3].name : ""} role={clickBullet == "Douglas" ? Data.crew[0].role : clickBullet == "Mark" ? Data.crew[1].role : clickBullet == "Victor" ? Data.crew[2].role : clickBullet == "Anousheh" ? Data.crew[3].role : ""} bio={clickBullet == "Douglas" ? Data.crew[0].bio : clickBullet == "Mark" ? Data.crew[1].bio : clickBullet == "Victor" ? Data.crew[2].bio : clickBullet == "Anousheh" ? Data.crew[3].bio : ""}/>

                <div className='w-[100%] flex justify-start items-center gap-5 xl:pt-10 md:pt-6'>
                    <div className='xl:w-[58%] lg:w-[62%] md:w-[68%] w-[100%] flex justify-center items-center gap-5'>

                        <button onClick={()=> setBullet("Douglas")} className={`${clickBullet == "Douglas" ? "bg-white" : "bg-[#808080]"} rounded-full xl:w-[18px] xl:h-[18px] w-[15px] h-[15px]`}></button>
                        <button onClick={()=> setBullet("Mark")} className={`${clickBullet == "Mark" ? "bg-white" : "bg-[#808080]"} rounded-full xl:w-[18px] xl:h-[18px] w-[15px] h-[15px]`}></button>                    
                        <button onClick={()=> setBullet("Victor")} className={`${clickBullet == "Victor" ? "bg-white" : "bg-[#808080]"} rounded-full xl:w-[18px] xl:h-[18px] w-[15px] h-[15px]`}></button>                    <button onClick={()=> setBullet("Anousheh")} className={`${clickBullet == "Anousheh" ? "bg-white" : "bg-[#808080]"} rounded-full xl:w-[18px] xl:h-[18px] w-[15px] h-[15px]`}></button>

                    </div>
                </div>

            </div>

            <div className='md:w-[50%] w-[100%] max-[426px]:flex max-[426px]:justify-center max-[426px]:items-center pt-5 md:pt-0'>

                <img className="xl:w-[53%] xl:h-[53%] lg:w-[65%] lg:h-[65%] w-[70%] h-[70%] md:pl-10 xl:pl-0" src={clickBullet == "Douglas" ? Douglas : clickBullet == "Mark" ? Mark : clickBullet == "Victor" ? Victor : clickBullet == "Anousheh" ? Anousheh : ""} alt="" />

            </div> */}
      </div>

      
      {/* if want to use FlowBite-Carousel */}
      {/* 
        <div className="h-[600px] pb-10">

            <Carousel slide={false} leftControl=" " rightControl=" " className='wrapper'>
            {Data.crew.map((element, id) => {
                    return (
                        <div className="h-[100%] flex items-start justify-center bg-none text-white">
                            
                            <div className='w-[50%] h-[100%] flex justify-center items-center'>

                                <div className='h-[100%] flex flex-col justify-center items-start xl:w-[60%] w-[70%] pl-6'>

                                    <h1 className='xl:text-[30px] text-[26px] font-nanum text-[#9EA4BDff]'>{element.role.toUpperCase()}</h1>
                                    <p className='xl:text-[45px] text-[35px] font-nanum'>{element.name.toUpperCase()}</p>
                                    <p className='text-[18px] text-[#9EA4BDff]'>{element.bio}</p>

                                </div>

                                
                            </div>

                            <div className='w-[50%] flex justify-center items-center'>

                                <div className='w-[100%] flex justify-center items-end'>

                                    <img src={new URL(`../img/${element.images.png}`, import.meta.url).href} alt="" className='w-[250px] h-[350px]' />

                                </div>

                            </div>
                        </div>
                    );
                })}
            </Carousel> */}
    </div>
  );
}
