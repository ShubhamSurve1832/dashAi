'use client'
import React from 'react'
import { Form, Formik } from 'formik'
import { FormikForm } from '@/components/FormikForm'
import Image from 'next/image'
import BankImage from '../../../../public/images/bankImage.jpg'
import PrimaryBtn from '@/components/UI/PrimaryBtn'


const BankCard = () => {
    return (
        <div>
            <Formik
                initialValues={{ isChecked: false }}
                // validationSchema={profileValidationSchema}
                // onSubmit={onSubmit}
                enableReinitialize>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-4 gap-4'>
                            <div className='bg-[#00000005] p-4 rounded-[4px] '>
                                <FormikForm.CheckBox name="isChecked" placeholder='' label='' styles='placeholder-[#00000066]  placeholder-sm' />
                                <div className='mt-5'>
                                    <div className='w-16 h-16 rounded-full flex justify-center items-center bg-white'>
                                        <Image src={BankImage} alt='' className='rounded-full' />
                                    </div>
                                    
                                    <p className='font-bold text-xl mt-3'>Bank of America</p>
                                </div>
                            </div>
                        </div>
                        <PrimaryBtn className="w-full text-xl mt-4" title="Generate Loan Options" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BankCard;