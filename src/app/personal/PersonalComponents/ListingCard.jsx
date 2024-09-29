'use client'
import MilesIcon from '@/images/icons/MilesIcon';
import RoundedQuestionIcon from '@/images/icons/RoundedQuestionIcon';
import Link from 'next/link';

const ListingCard = ({ productList, wishlistIds, removeProduct }) => {

    return (
        <>

            <div className='border border-[#E9D9FF] bg-[#E9D9FF1A] rounded-xl p-4'>
                <div className='rounded-xl relative' >
                    <img loading='lazy' width={100} height={100} src="/images/carImage.svg" className='rounded-xl w-full' alt="Place image" />
                </div>
                <div className='2xl:mt-6 mt-5'>
                    <div className='categoryBtn w-max'>
                        <p>Used</p>
                    </div>
                    <h3 className='text-lg font-bold mt-3'> 2021 Kia Forte</h3>                    
                    <p className='text-sm text-[#00000080]'>EX IVT</p>
                    <div className='flex items-center gap-1 pb-3 border-b mt-2 border-[#E9D9FF]'>
                        <MilesIcon />
                        <p className='text-[#000000B2] text-sm'>31,531 Miles</p>
                    </div>
                    <div className='flex items-start my-2'>
                        <p className='text-[#333333]'>Auto Nation 1Price</p>
                        <RoundedQuestionIcon />
                    </div>
                    <h4 className='font-bold text-lg'>$ 15,995</h4>
                </div>
            </div>
        </>
    )
}

export default ListingCard;
