import PrimaryBtn from '@/components/UI/PrimaryBtn';
import MilesIcon from '@/images/icons/MilesIcon';
import React from 'react'

const CarDetailsCard = () => {
    return (
        <div className='border border-[#E9D9FF] rounded-[4px] p-4 bg-[#E9D9FF1A] grid gap-4 detailCard'>
            <div>
                <img loading='lazy' width={100} height={100} src="/images/carImage.svg" className='rounded-xl w-full' alt="Place image" />
            </div>
            <div>
                <div className=' w-max categoryBtn'>
                    <p>Used</p>
                </div>
                <h3 className='text-lg font-bold mt-3'> 2021 Kia Forte</h3>
                <p className='text-sm text-[#00000080]'>EX IVT</p>
                <div className='flex items-center gap-1 pb-3 border-b my-2 border-[#E9D9FF]'>
                    <MilesIcon />
                    <p className='text-[#000000B2] text-sm'>31,531 Miles</p>
                </div>
                <p className='text-[#000000B2] text-sm mt-3'>MSRP</p>
                <h4 className='font-bold text-lg'>$ 15,995</h4>
                <PrimaryBtn className=" w-full text-xl mt-4" title="Select" />
            </div>
        </div>
    )
}

export default CarDetailsCard;