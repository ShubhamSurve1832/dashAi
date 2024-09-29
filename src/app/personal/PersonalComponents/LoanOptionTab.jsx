'use client'
import React, { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, } from "@headlessui/react";
import DownArrow from '@/images/icons/DownArrow';
import { Form, Formik } from 'formik';
import { employmentVals } from '../../../config/constants/initialValues'
import { FormikForm } from '@/components/FormikForm';
import LoanCard from './LoanCard';
import BankCard from './BankCard';
import Slider from 'react-slick';
import { COMMON_SETTINGS } from '@/config/constants';

const settings = COMMON_SETTINGS({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow480: 1,
    centerMode480: false,
    centerPadding480: '35px',
    dots1024: false,
    dots600: false,
    dots480: false
});


const LoanOptionTab = () => {
    const [value, setValue] = useState(2000); // Initial slider value

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className='p-4 bg-[#fff] rounded-[4px] mt-4'>
            <Disclosure
                as="div"
                defaultOpen={true}
            >
                <DisclosureButton className="p-3 group flex w-full items-center justify-between bg-[#F3F2F6]  rounded-[4px] tracking-[1px]">
                    <span className="text-xl font-semibold text-[#000000] group-data-[hover]:text-black/80">
                        Loan Options
                    </span>
                    <div className="flex items-center justify-center text-black">
                        <DownArrow />
                    </div>
                </DisclosureButton>
                <DisclosurePanel className="pt-5 pb-7">
                    <div>
                        <BankCard />
                    </div>
                    <div>
                        <Formik
                            initialValues={employmentVals}
                            // validationSchema={profileValidationSchema}
                            // onSubmit={onSubmit}
                            enableReinitialize>
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='grid grid-cols-2 gap-7 gap-y-4'>
                                        <FormikForm.Select name="sort" placeholder='' label='Sort' styles='placeholder-[#00000066]  placeholder-sm' />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className='w-[970px]'>
                            <Slider {...settings}>
                                <LoanCard />
                                <LoanCard />
                                <LoanCard />
                            </Slider>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}

export default LoanOptionTab;