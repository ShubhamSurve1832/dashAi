'use client'
import React, { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import ListingCard from './ListingCard';
import FilterIcon from '@/images/icons/FilterIcon';
import SortIcon from '@/images/icons/SortIcon';
import FilterModal from './FilterModal';

const VehicleListing = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div>
                <div className='flex gap-4 mb-4'>
                    <div className='flex justify-between items-center gap-2 p-3 border text-[#150C0B] border-[#572E91] rounded-md cursor-pointer' onClick={()=>setShowFilter(true)}>
                        <FilterIcon />
                        <p>Filter</p>
                    </div>
                    <div className='flex justify-between items-center gap-2 p-3 border text-[#150C0B] border-[#572E91] rounded-md cursor-pointer'>
                        <SortIcon />
                        <p>Sort</p>
                    </div>
                </div>
                <Formik
                    initialValues={employmentVals}
                    // validationSchema={profileValidationSchema}
                    // onSubmit={onSubmit}
                    enableReinitialize>
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className='flex gap-4 mb-6'>
                                <div className='categoryBtn'>
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='New' styles='placeholder-[#000000B2] mb-0 placeholder-sm' />
                                </div>
                                <div className='categoryBtn'>
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='Used' styles='placeholder-[#000000B2] mb-0 placeholder-sm' />
                                </div>
                                <div className='categoryBtn'>
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='Certified' styles='placeholder-[#000000B2] mb-0 placeholder-sm' />
                                </div>
                            </div>
                            <h3 className='text-[#000000B2] font-semibold text-xl pb-4 border-b'>25 Vehicles</h3>

                            <div className='grid justify-between grid-cols-3 gap-5 mt-4'>
                                <ListingCard />
                                <ListingCard />
                                <ListingCard />
                            </div>
                        </Form>
                    )}
                </Formik>
                {showFilter &&
                <FilterModal open={showFilter} setOpen={setShowFilter} />
                }
            </div>
        </>
    )
}

export default VehicleListing