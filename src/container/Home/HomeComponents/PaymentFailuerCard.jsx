import ErrorIcon from '@/images/icons/ErrorIcon';
import React from 'react'

const PaymentFailuerCard = () => {
    return (
        <div className='border-[#572E9133] border-[0.5px] rounded-[4px]'>
            <div className='bg-[#E9D9FF33] p-4'>
                <h3 className='font-semibold text-2xl mr-8'>Peter <br />
                    Thompson
                </h3>
                <span className='text-[#00000080] mt-2 text-sm'>Id: 256</span>
            </div>
            <div className='p-4 bg-[#FFFFFF] '>
                <div className='flex items-center gap-3'>
                    <ErrorIcon />
                    <span className='text-lg text-[#DF3025]'>Payment Failure</span>
                </div>
            </div>
            <div className='flex justify-between text-[#00000066] p-3 bg-[#0000000D] text-sm'>
                <p>Apr 12</p>
                <p>14:27 PM</p>
            </div>
        </div>
    )
}

export default PaymentFailuerCard;