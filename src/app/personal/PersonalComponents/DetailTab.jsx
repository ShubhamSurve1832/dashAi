import React from 'react'
import CarDetailsCard from './CarDetailsCard'
import PrimaryBtn from '@/components/UI/PrimaryBtn'
import { Form, Formik } from 'formik'
import { FormikForm } from '@/components/FormikForm'
import { vehicleSelectionVals } from '@/config/constants/initialValues'

const DetailTab = () => {
  return (
    <div>
      <Formik
        initialValues={vehicleSelectionVals}
        // validationSchema={profileValidationSchema}
        // onSubmit={onSubmit}
        enableReinitialize>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <CarDetailsCard />
            <div className='mt-6'>
              <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Car Details</h3>
              <div className='my-4'>
                <div className='flex my-4 gap-1'>
                  <span className='font-semibold'>Brand : </span>
                  <p> Kia</p>
                </div>
                <div className='flex my-4 gap-1'>
                  <span className='font-semibold'>Model : </span>
                  <p>Forte</p>
                </div>
                <div className='flex my-4 gap-1'>
                  <span className='font-semibold'>Colour : </span>
                  <p> Red</p>
                </div>
                <div className='flex my-4 gap-1'>
                  <span className='font-semibold'>Price : </span>
                  <p> $15,995</p>
                </div>
              </div>
            </div>
            <div className='mt-6 grid grid-cols-2 gap-7 gap-y-4'>
              <FormikForm.Select label='Options' name='options' />
              <FormikForm.Input name="serviceContract" placeholder='' label='Service Contract' styles='placeholder-[#00000066]  placeholder-sm' />
              <FormikForm.Input name="warranty" placeholder='' label='Warranty' styles='placeholder-[#00000066]  placeholder-sm' />
              <FormikForm.Input name="vehicleCarryingCost" placeholder='' label='Vehicle Carrying Cost' styles='placeholder-[#00000066]  placeholder-sm' />
              <FormikForm.Input name="gapInsurance" placeholder='' label='GAP Insurance' styles='placeholder-[#00000066]  placeholder-sm' />
            </div>
            <div className='mt-6'>
              <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>Price Details</h3>
              <div className='my-4'>
                <div className='flex my-2 gap-1 justify-between'>
                  <span className='font-semibold'>Price : </span>
                  <p> $8000</p>
                </div>
                <div className='flex my-2 gap-1 justify-between'>
                  <span className='font-semibold'>Trade-in : </span>
                  <p> $8000</p>
                </div>
                <div className='flex my-2 gap-1 justify-between'>
                  <span className='font-semibold'>Down Payment : </span>
                  <p> $8000</p>
                </div>
                <div className='flex my-2 gap-1 justify-between'>
                  <span className='font-semibold'>Loan Amount : </span>
                  <p> $8000</p>
                </div>
                <div className='flex gap-1 justify-between my-3 pt-3 border-t border-[#E9D9FF]'>
                  <span className='font-semibold'>Total : </span>
                  <p>$5000</p>
                </div>
              </div>
              <PrimaryBtn className=" w-full text-xl mt-6" title="Select" />
            </div>
          </Form>
        )}
      </Formik>
    </div >
  )
}

export default DetailTab