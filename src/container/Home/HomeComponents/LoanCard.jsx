import GreenChecked from '@/images/icons/GreenChecked'
import React from 'react'

const LoanCard = () => {
    return (
        <div className=' rounded-[4px] mb-6 relative border-[0.5px] border-[#572E9133] '>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-yellow-400 border-l-[40px] border-l-transparent"></div>
            <div className='bg-[#E9D9FF33] p-4'>
                <h3 className='font-semibold text-2xl mr-12'>Dennis 
                Brown</h3>
                <span className='text-[#00000080] mt-2 text-sm'>Id: 253</span>
            </div>
            <div className='p-4 bg-[#FFFFFF] pb-0'>
                <div className='my-2'>
                    <div className='flex justify-between items-center pb-4 border-b'>
                        <p className='text-[#000000B2] text-base'>Loan Options</p>
                        <GreenChecked />
                    </div>
                    <div className='flex justify-between items-center py-4'>
                        <p className='text-[#000000B2] text-base'>Shared with Customer</p>
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

export default LoanCard