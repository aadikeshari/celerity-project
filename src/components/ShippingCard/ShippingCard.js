import React from 'react';
import location from '../../assets/location.svg';
import transport from '../../assets/Vector.svg';
import frame from '../../assets/Frame 64.svg';
import emptyStar from '../../assets/empty-star.svg';
import star from '../../assets/star.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wrapper } from './ShippingCard.style';

function ShippingCard() {
    const navigate=useNavigate();
    const locationHook=useLocation();
    const data=locationHook.state;

    return (
        <Wrapper className='flex mt-4 justify-between rounded-[14px] bg-[#ffffff] px-7 py-4'>
            <div>
                <div className='flex items-center mb-5'>
                    <span className='px-[12.5px] py-[10px] bg-[#AFFFAD] rounded-[12px] font-[400] text-[11px]'>Best value</span>
                    <span className='ml-6  mr-[10px] text-[#ff0000]'>Express</span>
                    <span className='pl-[10px] border-l border-[rgba(163, 163, 163, 0.4)] text-[#565656] font-[400] text-[11px]'>Ext. 5 days</span>
                </div>

                <div className='flex items-center'>
                    <img src={location} alt='location' className='mr-1'/>
                    <span>{data.origin}</span>
                    <hr className='w-6 border-[#565656] ml-2'/>
                    <img src={transport} alt='transport' className='mx-2'/>
                    <hr className='w-6 border-[#565656] mr-2'/>
                    <img src={location} alt='location' className='mr-1'/>
                    <span>{data.destination}</span>
                </div>

                <div className='flex mt-6 items-center'>
                    <img src={frame} alt="weightScale" className="w-5 h-[15px] mr-[6px]"/>    
                    <div className='text-[#808080] font-[400] text-[11px] mr-[14px]'>Primetime Worldwide</div>   
                    <div className='flex'>
                        <img src={star} alt='star' className='mr-1'/> 
                        <img src={star} alt='star' className='mr-1'/> 
                        <img src={star} alt='star' className='mr-1'/> 
                        <img src={star} alt='star' className='mr-1'/> 
                        <img src={emptyStar} alt='star' className='mr-1'/> 
                    </div>        
                </div>
            </div>
            <div className='border-l border-[rgba(163, 163, 163, 0.4)] pl-3 flex flex-col items-center justify-center'>
                <div className='font-[700] text-[19px]'>$ 3,982.63</div>
                <button type='button' 
                onClick={()=>navigate('/Booking',
                    {
                        state:{
                            ...data,
                            price:"$ 3,982.63",
                        }
                    })} 
                className='font-[400] text-[16px] text-[#ffffff] bg-[#6F57E9] rounded-[14px] mt-3 px-7 py-2'>
                Select
                </button>
                <div className='font-[400] text-[11px] underline mt-2'>View details</div>
            </div>
        </Wrapper>
    );
};

export default ShippingCard;