import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./SearchBar.styled";
import ship from '../../assets/ship.svg';
import location from '../../assets/location.svg';
import calendar from '../../assets/calendar.svg';
import edit from '../../assets/edit2.svg';

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const originRef=useRef("");
  const destinationRef=useRef("");
  const dateRef=useRef("");
  const loadRef=useRef("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    navigate("/Shipping",{
      state:{
        origin:originRef.current.value,
        destination:destinationRef.current.value,
        date:dateRef.current.value,
        load:loadRef.current.value
      }
    });
  };

  return (
    <Wrapper className="flex items-center justify-center  bg-white mt-32 mx-16 px-4 py-7 rounded space-x-5" onSubmit={(e) => handleSubmit(e)}>
      <img src={location} alt="location-logo"/>
      <input
        type="text"
        ref={originRef}
        className=" block w-full font-semibold text-black outline-none"
        placeholder="Origin, Port, City"
        required
        readOnly={data}
        value={data && data.origin}
      />
      <img src={location} alt="location-logo"/>
      <input
        type="text"
        ref={destinationRef}
        className=" block w-full font-semibold text-black outline-none border-r-2"
        placeholder="Destination, Port, City"
        required
        readOnly={data}
        value={data && data.destination}
      />
      <img src={calendar} alt="date-logo"/>
      <input
        type="text"
        ref={dateRef}
        className=" block w-full font-semibold text-black outline-none border-r-2"
        placeholder="13 April 2023"
        required
        readOnly={data}
        value={data && data.date}

      />
      <img src={ship} alt="ship-logo"/>
      <input
        type="text"
        ref={loadRef}
        className=" block w-full font-semibold text-black outline-none border-r-2"
        placeholder="Load"
        required
        readOnly={data}
        value={data && data.load}
      />
      {!data ?
        <button
          type="submit"
          className="bg-[#9747ff]  text-white font-semibold p-2 mt-1 rounded"
        >
          <BsArrowRight />
        </button>
        :
        <img src={edit} alt='edit-icon'/>
      }
    </Wrapper>
  );
};

export default SearchBar;
