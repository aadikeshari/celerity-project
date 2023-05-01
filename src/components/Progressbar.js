import React from "react";

const Progressbar = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 mb-16">
      <div className="flex w-fit justify-center items-center text-white">
        <span className="bg-[#D3B0FF] rounded-full px-4 py-2">1</span>
        <span className="bg-[#D3B0FF] w-20 h-0.5 m-1"></span>
        <span className="bg-[#D3B0FF] rounded-full px-4 py-2">2</span>
        <span className="bg-[#D3B0FF] w-20 h-0.5 m-1"></span>
        <span className="bg-[#D3B0FF] rounded-full px-4 py-2">3</span>
        <span className="bg-[#D3B0FF] w-20 h-0.5 m-1"></span>
        <span className="bg-[#D3B0FF] rounded-full px-4 py-2">4</span>
      </div>
      <div className="flex justify-evenly text-xs my-1">
        <p>Search</p>
        <p className="pl-14">Recommended Services</p>
        <p className="pl-10">Results</p>
        <p className="pl-20">Booking</p>
      </div>
    </div>
  );
};

export default Progressbar;
