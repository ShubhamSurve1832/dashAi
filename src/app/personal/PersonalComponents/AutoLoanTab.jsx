'use client'
import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { autoLoanVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';

const AutoLoanTab = () => {

    const [initialValues, setInitialValues] = useState(autoLoanVals);

    useEffect(() => {
        setInitialValues({ requestedMonthlyPayment: "", requestedDownPayment: "", interestRate: "", loanTermMonths: "", remainingLoanBalance: "$ 6,040", monthlyPayment: "$ 300 ", remainingNumberOfPayments: "26", currentInterestRate: "7", vin: "", licensePlate: "", year: "", make: "", model: "", trim: "", currentMiles: "", notesOnCarCondition: "", carMikes: "", uploadVIN: "", uploadDamages: "" })
    }, [])

    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Auto Loan Requirement
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <div>
                        <Formik
                            initialValues={initialValues}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Desired Loan Terms</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input name="requestedMonthlyPayment" placeholder='Enter requested monthly payment' label='Requested Monthly Payment' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="requestedDownPayment" placeholder='Enter request down payment' label='Requested Down Payment' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="interestRate" placeholder='Enter interest rate' label='Interest Rate' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="loanTermMonths" placeholder='Enter your loan term in months' label='Loan Term (Months)' styles='placeholder-[#00000066]  placeholder-sm' />
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Current Loan Terms</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.Input name="remainingLoanBalance" placeholder='' label='Remaining Loan Balance' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="monthlyPayment" placeholder='' label='Monthly Payment' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="remainingNumberOfPayments" placeholder='' label='Remaining Number of Payments' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="currentInterestRate" placeholder='' label='Current Interest Rate' styles='placeholder-[#00000066]  placeholder-sm' />
                                        </div>
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Trade-in Vehicle</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 mt-7'>
                                            <FormikForm.Input name="vin" placeholder='Enter your VIN' label='VIN' styles='placeholder-[#00000066]  placeholder-sm' />
                                        </div>
                                        <div className='w-1/2 text-center my-4'>
                                            <p className='text-lg font-semibold text-[#000000B2]'>OR</p>
                                        </div>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 mb-5'>
                                            <FormikForm.FileUpload value='' label="Car Mikes" name="carMikes" updateFilesCb='' />
                                        </div>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 mb-7'>
                                            <FormikForm.Input name="licensePlate" placeholder='Enter your license plate number' label='License Plate' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="year" placeholder='YYYY' label='Year' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Make' name='make' />
                                            <FormikForm.Input name="model" placeholder='Select model name' label='Model' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Input name="trim" placeholder='Enter trim' label='Trim' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Current Miles' name='currentMiles' />
                                            <FormikForm.Input type='textarea' name="notesOnCarCondition" placeholder='Enter notes on car condition' inlineStyle='col-span-2' label='Notes on Car Condition' styles='placeholder-[#00000066]  placeholder-sm' />
                                        </div>
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Upload Images</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.FileUpload value='' label="Car Mikes" name="carMikes" updateFilesCb='' />
                                            <FormikForm.FileUpload value='' label="VIN" name="uploadVIN" updateFilesCb='' />
                                            <FormikForm.FileUpload value='' label="Damages to Vehicle" name="uploadDamages" updateFilesCb='' />
                                            <FormikForm.FileUpload value='' label="Odometer Reading" name="odometerReading" updateFilesCb='' />
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default AutoLoanTab;