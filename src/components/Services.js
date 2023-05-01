import React from "react";
import { BiMessageAltMinus } from "react-icons/bi";
import Cards from "./Cards/Cards";
import { RiShipLine } from "react-icons/ri";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { TiMessage } from "react-icons/ti";

const Services = () => {
  const cardsData=[
    {
      id:1,
      topic:"Freight Servies",
      description:"Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door",
      img:<RiShipLine className="text-[#0075ff] text-[2rem]" />
    },   
    {
      id:2,
      topic:"Business Servies",
      description:"We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.",
      img:<MdOutlineBusinessCenter className="text-[#ff4747] text-[2rem]" />
    },
    {
      id:3,
      topic:"Shipping & Logistics",
      description:"Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.",
      img:<SlGlobe className="text-[#ff6813] text-2xl" />
    },
    {
      id:4,
      topic:"24/7 Servies",
      description:"Receive support from our experts all over the world at every stage of the process, 24/7.",
      img:<TiMessage className="text-[#0075ff] text-2xl" />
    },
  ];
  return (
    <>
      <h1 className="mt-16 font-[600] text-[30px] text-center">Services</h1>
      <div className="flex justify-between my-10 mx-8 gap-4 relative">
        {cardsData.map((data)=>(
          <Cards topic={data.topic} description={data.description} img={data.img} key={data.id}/>
        ))}
        <div className="p-4 right-4 absolute bottom-[-16%] bg-[#9747ff] w-fit rounded-full">
          <BiMessageAltMinus className="text-white text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Services;
