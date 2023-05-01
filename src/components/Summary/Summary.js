import React from "react";
import { BookingCard } from "./Summary.style";
import area from '../../assets/area-icon.svg';
import express from '../../assets/Frame55.svg'
import weight from '../../assets/weightmeter.svg'
import PriceDetails from "../PriceDetails";
import load from '../../assets/Vector 3.svg';
import frame from '../../assets/Frame 64.svg';
import xcover from '../../assets/Xcover.svg';
import { useLocation } from "react-router-dom";

const Summary = () => {
  const location=useLocation();
  const data=location.state;

  return (
    <div className="flex mx-10 justify-between mb-16 gap-16">

      <div className="flex flex-col gap-3 flex-[0.75]">
        <BookingCard className="p-7">
          <div className="font-[700] text-[23px]">Booking Summary</div>
          <div className="flex mt-7 items-center">
            <div className="mt-11 flex items-center flex-col">
              <img src={area} alt="area"/>
              <div  className="mt-5 font-[600] text-[19px] text-center">
                <div>{data.origin}</div>
                {/* <div>110003 India</div> */}
              </div>
            </div>

            <div className="self-start">
              <div className="font-[600] text-[13px] text-center">Express</div>
              <img src={express} alt="express-icon" className="mt-2"/>
            </div>

            <div className="mt-11 flex items-center flex-col">
              <img src={area} alt="area"/>
              <div className="mt-5 font-[600] text-[19px] text-center">
                <div>{data.destination}</div>
                {/* <div>110003 India</div> */}
              </div>
            </div>
          </div>
        </BookingCard>

        <div className="flex gap-3">
          <BookingCard className="py-5 px-6">
            <div className="text-[#5C5C5C] font-[600] text-[17px]">Total Weight/Volume</div>
            <img src={weight} alt="weightScale" className="mx-auto my-4"/>
            <div className="font-[700] text-[19px] text-center">{data.load}</div>
          </BookingCard>

          <BookingCard className="py-5 px-6 flex-1">
            <div className="text-[#5C5C5C] font-[600] text-[17px]">Load</div>
            <div className="flex justify-center items-center mt-2">
              <div className="font-[700] text-[24px]">1</div>
              <div className="font-[700] text-[24px] mr-11">X</div>
              <div>
                <img src={load} alt="weightScale" className="mx-auto mt-2"/>
                <div className="font-[700] text-[16px] text-center mt-2">Pallets</div>
                <div className="font-[400] text-[16px] text-center mt-1">230 X 140 X  120 CM</div>
              </div>
            </div>
          </BookingCard>
        </div>

        <div className="flex gap-3">
          <BookingCard className="p-7 flex-1">
            <div>
              <span className="text-[#5C5C5C] font-[600] text-[17px]">Seller:</span>
              <span className="text-[#5C5C5C] font-[700] text-[17px]"> Primetime Worldwide</span>
            </div>
            <img src={frame} alt="weightScale" className="mx-auto my-8"/>
          </BookingCard>

          <BookingCard className="p-7 flex-1">
            <div>
              <span className="text-[#5C5C5C] font-[600] text-[17px]">Insurance:</span>
              <span className="text-[#5C5C5C] font-[700] text-[17px]">Xcover.com</span>
            </div>
            <img src={xcover} alt="weightScale" className="mx-auto my-8"/>
          </BookingCard>
        </div>

      </div>

      <PriceDetails data={data}/>
    </div>
  );
};

export default Summary;
