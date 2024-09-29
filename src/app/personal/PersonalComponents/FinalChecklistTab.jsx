'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals, FinalChecklistVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';

const FinalChecklistTab = () => {
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Final Walkthrough Checklist
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <Formik
                        initialValues={FinalChecklistVals}
                        // validationSchema={profileValidationSchema}
                        // onSubmit={onSubmit}
                        enableReinitialize>
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className=''>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Vehicle Documents</h3>
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='Signed Loan Agreement' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.CheckBox name="singedLoan" placeholder='' label='Signed Loan Agreement' styles='placeholder-[#00000066]  placeholder-sm' />
                                    <FormikForm.CheckBox name="carFax" placeholder='' label='CarFax Sign Off' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                                <div className='my-6'>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Vehicle Inspection</h3>

                                </div>
                                <div className='my-6'>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Key Hand Off</h3>

                                </div>
                                <div className='my-6'>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 mb-4 border-b'>Notes</h3>
                                    <FormikForm.Input type="textarea" name="employer" placeholder='' styles='placeholder-[#00000066]  placeholder-sm' />
                                </div>
                            </Form>
                        )}
                    </Formik>

                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default FinalChecklistTab