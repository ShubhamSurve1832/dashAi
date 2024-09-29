import React from 'react'
import { FormikForm } from '@/components/FormikForm'
import PrimaryBtn from '@/components/UI/PrimaryBtn'
import SecondaryBtn from '@/components/UI/SecondaryBtn'
import { employmentVals } from '@/config/constants/initialValues'
import BankImage from '../../../../public/images/bankImage.jpg'
import Image from 'next/image'
import { Form, Formik } from 'formik'

const LoanCard = () => {
    return (
        <div className='border border-[#0000001A] hover:border-[#572E91] rounded-lg p-5 mr-6'>
            <div className='flex justify-between border-b border-[#0000001A] pb-5 items-center'>
                <div className='flex items-center gap-4'> 
                    <div className='w-16 h-16 rounded-full flex justify-center items-center bg-white border border-[#012069]'>
                        <Image src={BankImage} alt='' className='rounded-full' width={50} height={50} />
                    </div>
                    <h3 className='text-base'>Bank of America</h3>
                </div>
                <div className=' w-max categoryBtn'>
                    <p>Best Choice</p>
                </div>
            </div>
            <div className='bg-[#0078D21A] rounded-md p-4 flex justify-between items-center my-5'>
                <p className='text-[#666666] text-sm font-semibold'>Dealership Margin</p>
                <span className='text-[#0078D2] font-bold text-xl'>10%</span>
            </div>
            <Formik
                initialValues={employmentVals}
                // validationSchema={profileValidationSchema}
                // onSubmit={onSubmit}
                enableReinitialize>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormikForm.RangeSelect />
                        <div className='flex justify-between gap-3'>
                            <SecondaryBtn className="w-full  text-xl mt-4" title="Compare" />
                            <PrimaryBtn className="w-full  text-xl mt-4" title="Select" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoanCard
