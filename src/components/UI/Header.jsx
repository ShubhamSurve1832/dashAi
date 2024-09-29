import Image from 'next/image';
import React from 'react'
import Logo from '../../../public/images/logo.svg'
import { FormikForm } from '../FormikForm';
import { Form, Formik } from 'formik';
import BulletedList from '@/images/icons/BulletedList';
import SearchIcon from '@/images/icons/SearchIcon';
import BellIcon from '@/images/icons/BellIcon';
import WarningIcon from '@/images/icons/WarningIcon';
import ChatIcon from '@/images/icons/ChatIcon';
import UserIcon from '@/images/icons/UserIcon';
import ArrowDown from '@/images/icons/ArrowDown';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { NAVIGATION } from '@/config/constants';

export const NotificationNumbers = ({ className, children }) => {
    return (

        <div className={` text-white flex justify-center items-center gap-2 absolute top-2 left-6 p-1 rounded-full w-[16px] h-[16px] text-[9px] ${className}`}> {children} </div>

    )
}

const Header = () => {
    return (
        <header className='p-6 flex justify-between items-center bg-[#fff] rounded-[4px]'>
            <div className='flex items-center gap-6'>
                <Link href='/'>
                    <Image src={Logo} width={120} height={120} alt='Logo' />
                </Link>
                <Formik
                    initialValues={{ search: "" }}
                    enableReinitialize
                >
                    {({ handleSubmit, values, setFieldValue }) => {
                        return (
                            <>
                                <Form onSubmit={handleSubmit} className='relative'>
                                    <FormikForm.Input name="search" placeholder="Search by ID, First Name, or Last Name" inlineStyle='w-[21rem]' styles='pl-9 p-3 rounded-xl' />
                                    <div className='absolute left-3 top-4'>
                                        <SearchIcon />
                                    </div>
                                </Form>
                            </>
                        );
                    }}
                </Formik >
            </div>
            <div className='flex justify-between gap-7 items-center'>
                <div className='nav-rounded-btn !p-4 '>
                    <BulletedList />

                </div>
                <div className='flex justify-between items-center gap-3'>
                    <div className='nav-rounded-btn relative'>
                        <ChatIcon />
                        <NotificationNumbers className='bg-[#5D6FFD]'>3</NotificationNumbers>
                    </div>
                    <div className='nav-rounded-btn relative'>
                        <WarningIcon />
                        <NotificationNumbers className='bg-[#EC675E]'>13</NotificationNumbers>
                    </div>
                    <div className='nav-rounded-btn relative'>
                        <BellIcon />
                        <NotificationNumbers className='bg-[#FBBC05]'>3</NotificationNumbers>
                    </div>
                    <div className='nav-rounded-btn flex items-center'>
                        <Menu>
                            <MenuButton className={`capitalize 2xl:text-lg text-base desktop flex items-center gap-2 bg-[#FFFFFF1A] rounded-[10px] font-medium`}>
                                <UserIcon />
                                <span className='font-semibold text-lg leading-3'>JS</span>
                                <ArrowDown />
                            </MenuButton>

                            <MenuItems
                                transition
                                anchor="bottom end"
                                className={`2xl:text-lg text-base  px-4 py-2 desktop  bg-[#fff] w-52 origin-top-right rounded-xl !top-28 !right-16 !left-auto shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-[9999]`}
                            >
                                {
                                    NAVIGATION.map((e) => {
                                        return (
                                            <MenuItem key={e}>
                                                <Link href={e.href} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[hover]:bg-[#ffffff8f] data-[focus]:bg-white/10">
                                                    {e.name}
                                                </Link>
                                            </MenuItem>
                                        )
                                    })
                                }
                                <MenuItem>
                                    <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[hover]:bg-[#ffffff8f] data-[focus]:bg-white/10">
                                        Logout
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;