import React from 'react';
import { BookingCard } from './Summary/Summary.style';
import shipper from '../assets/Frame 47.svg'

function PriceDetails({data}) {
  
    return (
        <BookingCard className='py-10 px-8 flex-[0.25]'>
            <div className='flex'>
                <span className="font-[700] text-[23px]">Price details</span>
                <img src={shipper} alt='shipper' className='ml-5'/>
            </div>
            <div className='flex justify-between mb-5 mt-12'>
                <span>Seller’s Quote</span>
                <span>{data.price}</span>
            </div>

            <hr/>

            <div className='flex justify-between mt-6'>
                <span>Duties and taxes</span>
                <span>Not included</span>
            </div>

            <div className='flex justify-between mt-0.5 font-[400] text-[16px] mb-6'>
                <span>Insurance</span>
                <span>$ 323.40</span>
            </div>

            <div className='flex justify-between font-[400] text-[16px] mb-6'>
                <span>Based on items cost</span>
            </div>

            <hr/>

            <div className='flex justify-between font-[400] text-[16px]'>
                <span>Add a <span>promo code</span> </span>
            </div>

            <div className='flex justify-between mt-4 font-[400] text-[16px] mb-6'>
                <span>Platform fee</span>
                <span>$ 119.48</span>
            </div>

            <hr/>

            <div className='flex justify-between font-[700] text-[28px] mt-6 mb-16'>
                <span>Total</span>
                <span>$ 4,102.13</span>
            </div>

            <button type='button' className='bg-[#9747FF] font-[700] text-[23px] text-[#ffffff] py-2 w-[-webkit-fill-available] rounded-[14px]'>Checkout</button>

        </BookingCard>
    );
}

export default PriceDetails;