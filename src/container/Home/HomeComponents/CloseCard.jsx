import GreenChecked from '@/images/icons/GreenChecked'
import React from 'react'

const CloseCard = () => {
    return (
        <div className='border-[#572E9133] border-[0.5px] rounded-[4px] mb-6 relative '>
            <div className='bg-[#E9D9FF33] p-4'>
                <h3 className='font-semibold text-2xl mr-8'>Kelly <br/>
                Davis</h3>
                <span className='text-[#00000080] mt-2 text-sm'>Id: 255</span>
            </div>
            <div className='p-4 bg-[#FFFFFF] pb-0'>
                <div className='my-2'>
                    <div className='flex justify-between items-center pb-4'>
                        <ol className='list-decimal pl-4'>
                            <li className='pb-4'>Loan Term</li>
                            <li className='pb-4'>Downpayment</li>
                            <li className='pb-4'>Trade in Vehicle</li>
                        </ol>
                    </div>
                    <div className='flex justify-between items-center pb-4  '>
                        <p className='text-[#000000B2] text-base font-semibold'>Decreased to $2,500</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between hover:bg-[#5AD8B5] text-[#00000066] p-3 bg-[#0000000D] text-sm'>
                <p>Apr 12</p>
                <p>14:27 PM</p>
            </div>
        </div>
    )
}

export default CloseCard;