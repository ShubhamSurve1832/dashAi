'use client'
import React, { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { searchVehicle } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '@/components/UI/PrimaryBtn';
import VehicleListing from './VehicleListing';
import DetailTab from './DetailTab';
import Progressbar from '@/components/UI/Progressbar';
import VehicleSelectionModal from './VehicleSelectionModal';

const VehicleSelectionTab = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Vehicle Selection
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5">
                    <div>
                        <Progressbar />
                        <Formik
                            initialValues={searchVehicle}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Select label='Make or Brand' name='brand' />
                                        <FormikForm.Select label='Model' name='modal' />
                                        <FormikForm.Select label='Body Style' name='bodyStyle' />
                                        <FormikForm.Select label='Years' name='year' />
                                    </div>
                                    <div className='my-7'>
                                        <p className='text-lg font-semibold text-[#000000B2] text-center'>OR</p>
                                        <FormikForm.Input name="licensePlate" placeholder='Enter stock number' label='Search by stock number' styles='placeholder-[#00000066]  placeholder-sm' />
                                    </div>
                                    <PrimaryBtn onClick={() => setOpen(true)} title="Search All Vehicles" className='w-full text-xl' />

                                </Form>
                            )}
                        </Formik>
                        <VehicleListing />
                        <DetailTab />

                    </div>
                </DisclosurePanel>
            </Disclosure>
            {
                open &&
                <VehicleSelectionModal open={open} setOpen={setOpen} />
            }
        </div>
    )
}

export default VehicleSelectionTab;