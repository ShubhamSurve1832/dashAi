import GreenChecked from '@/images/icons/GreenChecked'
import LockIcon from '@/images/icons/LockIcon'
import React from 'react'

const OpenCard = () => {
    return (
        <div className='border-[#572E9133] border-[0.5px] rounded-[4px] mb-6'>
            <div className='bg-[#E9D9FF33] p-4'>
                <h3 className='font-semibold text-2xl mr-8'>Christopher
                    Smith</h3>
                <span className='text-[#00000080] mt-2 text-sm'>Id: 252</span>
            </div>
            <div className='p-4 bg-[#FFFFFF] pb-0'>
                <div className='bg-[#FC24691A] p-2 rounded-[4px] flex gap-2 items-center w-max'>
                    <LockIcon />
                    <span className='text-[#000000B2] text-xs'> Christopher Charles</span>
                </div>
                <div className='my-2'>
                    <div className='flex justify-between items-center py-4 border-b'>
                        <p className='text-[#000000B2] text-base'>Personal</p>
                        <GreenChecked />
                    </div>
                    <div className='flex justify-between items-center py-4 border-b'>
                        <p className='text-[#000000B2] text-base'>Employment & 
                        Residence</p>
                        <GreenChecked />
                    </div>
                    <div className='flex justify-between items-center py-4 border-b'>
                        <p className='text-[#000000B2] text-base'>Loan Requirements</p>
                        <GreenChecked />
                    </div>
                    <div className='flex justify-between items-center py-4'>
                        <p className='text-[#000000B2] text-base'>Vehicle Requirements</p>                        
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

export default OpenCard