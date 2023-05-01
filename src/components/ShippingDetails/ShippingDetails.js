import React from 'react';
import ShippingCard from '../ShippingCard/ShippingCard';

function ShippingDetails({data}) {

    return (
        <div className='flex mx-20 my-10'>
            <div className='flex flex-col'>
                <div className='mb-3 font-[600] text-[16px]'>3 Top Quote <span className='font-[400] text-[16px]'>(6 in Total)</span></div>

                <select defaultValue="Filters" className='p-4 pl-0 bg-[transparent] font-[600] text-[16px]'>
                    <option value="Filters">Filters</option>
                </select>
                <select defaultValue="Filters" className='p-4 pl-0 bg-[transparent] font-[600] text-[16px]'>
                    <option value="Filters">Filters</option>
                </select>
                <select defaultValue="Filters" className='p-4 pl-0 bg-[transparent] font-[600] text-[16px]'>
                    <option value="Filters">Filters</option>
                </select>
                <select defaultValue="Filters" className='p-4 pl-0 bg-[transparent] font-[600] text-[16px]'>
                    <option value="Filters">Filters</option>
                </select>
            </div>

            <div className='ml-16 flex flex-col'>
                <div className='mb-10 cursor-pointer'>
                    <span className='py-4 px-16 bg-[#ffffff] text-[#9747FF] font-[600] text-[16px] rounded-[14px]'>Best Value 5-5 days. $3,121</span>
                    <span className='p-4 bg-[#EBE8FF] text-[#868686] font-[700] text-[13px]'>Quickest 5-5 days. $3,121</span>
                    <span className='py-4 px-12 bg-[#EBE8FF] text-[#868686] font-[700] text-[13px] rounded-r-[14px]'>Cheapest 5-5 days. $3,121</span>
                </div>

                <ShippingCard/>
                <ShippingCard className='flex mt-4 justify-between  rounded-[14px] bg-[#ffffff] px-7 py-4'/>
                <ShippingCard className='flex mt-4 justify-between  rounded-[14px] bg-[#ffffff] px-7 py-4'/>
                <ShippingCard className='flex mt-4 justify-between  rounded-[14px] bg-[#ffffff] px-7 py-4'/>
                <ShippingCard className='flex mt-4 justify-between  rounded-[14px] bg-[#ffffff] px-7 py-4'/>

            </div>
        </div>
    );
}

export default ShippingDetails;