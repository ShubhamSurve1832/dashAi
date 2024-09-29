import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import HistoryClockIcon from '@/images/icons/HistoryClockIcon';
import PersonalTab from './PersonalComponents/PersonalTab';
import EmploymentTab from './PersonalComponents/EmploymentTab';
import AutoLoanTab from './PersonalComponents/AutoLoanTab';
import VehicleSelectionTab from './PersonalComponents/VehicleSelectionTab';
import LoanOptionTab from './PersonalComponents/LoanOptionTab';
import FinalChecklistTab from './PersonalComponents/FinalChecklistTab';
import NotificationModal from '@/components/UI/NotificationModal';
import GreenChecked from '@/images/icons/GreenChecked';


const page = () => {
    return (
        <div className='persnal-tabs'>
            {/* LEFT SIDE TABS */}
            <div className='sideBar rounded-[4px]'>
                <div className='asideTabs bg-[#28A8200D]'>
                    <p>Personal</p>
                    <GreenChecked className='w-5 h-5'/>
                </div>
                <div className='asideTabs'>
                    <p>Employment &
                        Residence</p>
                </div>
                <div className='asideTabs'>
                    <p>Auto Loan
                        Requirement</p>
                </div>
                <div className='asideTabs'>
                    <p>Vehicle Selection</p>
                </div>
            </div>

            {/* RIGHT SIDE SECTION  */}
            <div>
                <div className='p-4 bg-[#fff] mb-4 rounded-[4px]' >
                    <div className='bg-[#E9D9FF33] p-4 flex justify-between items-center rounded-t-md'>
                        <div className='personal-header'>
                            <h1 className='text-[#000000B2] text-3xl font-medium mb-2'>Lauren Smith</h1>
                            <span className='text-[#00000080]'>Id: 252</span>
                        </div>
                        <div className='relative'>
                            <Menu>
                                <MenuButton className={`capitalize 2xl:text-lg text-base desktop flex items-center gap-2 bg-[#FFFFFF1A] rounded-[10px] font-medium`}>
                                    <HistoryClockIcon />
                                </MenuButton>

                                <MenuItems
                                    transition
                                    anchor="bottom end"
                                    className={`2xl:text-lg text-base p-8 desktop  bg-[#fff] !top-28 !bottom-8 w-[30rem] origin-top-right rounded-xl !right-16 !left-auto shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-[9999] hidden-scroller`}
                                >

                                    <MenuItem>
                                        {/* <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[hover]:bg-[#ffffff8f] data-[focus]:bg-white/10">
                                            
                                        </button> */}

                                        <NotificationModal />
                                    </MenuItem>
                                </MenuItems>
                            </Menu>

                        </div>
                    </div>
                </div>
                <PersonalTab />
                <EmploymentTab />
                <AutoLoanTab />
                <VehicleSelectionTab />
                <LoanOptionTab />
                <FinalChecklistTab />
            </div>
        </div>
    )
}

export default page;