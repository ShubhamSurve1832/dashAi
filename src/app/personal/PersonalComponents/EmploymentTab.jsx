'use client'
import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals} from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';

const EmploymentTab = () => {
    const [initialValues, setInitialValues] = useState(employmentVals);

    useEffect(() => {
        setInitialValues( {employer: "Software Solutions ",occupation: "Software Engineer",employmentType: "W2/Full time",hourlyPay: "$ 43.5",hoursPerWeek: "40",biWeeklyIncome: "$ 3,480",monthlyIncome: "$ 7,540",annualIncome: "$ 90,480",employmentStartDate: "",employmentDurationYears: "",employmentDurationMonths: "",residentType: "",residentDuration: "",rentAmount: "$2,000",yourShareOfRent: "$500",numberOfPeopleOnLease: "",additionalPeopleOnRent: "",sort:""})
    }, [])
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                    Employment & Residence
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
                                    <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Employment  & Income</h3>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                        <FormikForm.Input name="employer" placeholder='' label='Employer' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="occupation" placeholder='' label='Occupation' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="employmentType" placeholder='' label='Employment Type' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="hourlyPay" placeholder='' label='Hourly Pay' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="hoursPerWeek" placeholder='' label='Hours per Week' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="biWeeklyIncome" placeholder='' label='Bi-weekly Income' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="monthlyIncome" placeholder='' label='Monthly Income ' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.Input name="annualIncome" placeholder='' label='Annual Income ' styles='placeholder-[#00000066]  placeholder-sm' />
                                        <FormikForm.DatePicker placeholder='' label="Employment Start Date" name="employmentStartDate" styles='placeholder-[#00000066]  placeholder-sm' />
                                    </div>

                                    <div className='mt-11'>
                                        <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Residence Information</h3>
                                        <div className='grid grid-cols-2 gap-7 gap-y-4 my-7'>
                                            <FormikForm.Input name="ssn" placeholder='' label='Resident Duration' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Resident Duration' name='residentDuration' />
                                            <FormikForm.Input name="rentAmount" placeholder='' label='Rent Amount' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Number of people on lease' name='numberOfPeopleOnLease' />
                                            <FormikForm.Input name="yourShareOfRent" placeholder='' label='Your Share of the Rent' styles='placeholder-[#00000066]  placeholder-sm' />
                                            <FormikForm.Select label='Additional people on rent' name='additionalPeopleOnRent' />
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

export default EmploymentTab;