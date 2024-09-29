import GreenChecked from '@/images/icons/GreenChecked'
import React from 'react'

const ModificationCard = () => {
    return (
        <div className='border-[#572E9133] border-[0.5px] rounded-[4px] mb-6 relative '>            
            <div className='bg-[#E9D9FF33] p-4'>
                <h3 className='font-semibold text-2xl mr-8'>Joyce 
                Anderson</h3>
                <span className='text-[#00000080] mt-2 text-sm'>Id: 254</span>
            </div>
            <div className='p-4 bg-[#FFFFFF] pb-0'>
                <div className='my-2'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[#000000B2] text-base'>Downpayment</p>
                    </div>
                    <div className='flex justify-between items-center py-4'>
                        <p className='text-[#000000B2] text-base font-semibold'>Decreased to $380</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between text-[#00000066] p-3 bg-[#0000000D] text-sm'>
                <p>Apr 12</p>
                <p>14:27 PM</p>
            </div>
        </div>
    )
}

export default ModificationCard;