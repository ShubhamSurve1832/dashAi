'use client'
import React, { useState } from 'react'
import PlusIcon from '@/images/icons/PlusIcon'
import SSNModal from './SSNModal'

const TabHeader = () => {
    const [open, setOpen] = useState(false)
    const HandleIdentification = () => {
        setOpen(true)
    }
    return (
        <>
        <div className='border-t-4 border-[#FBBC05] bg-[#FFFFFF] p-4 rounded-[4px] flex justify-between' >
            <div className='flex justify-between items-center gap-3'  >
                <h3 className='text-[#000000B2] text-lg font-semibold'>
                    Queue
                </h3>
                <span className='p-3 border border-[#00000033] rounded-sm !py-1'>
                    1
                </span>
            </div>
            <div className='bg-[#572E91] rounded-[4px] flex items-center justify-center p-3 cursor-pointer'  onClick={HandleIdentification}>
                <PlusIcon />
            </div>
        </div>
        <SSNModal open={open} setOpen={setOpen} />
        </>
    )
}

export default TabHeader;