"use client"
import React from 'react'
import Modal from '../../../components/UI/Modal';
import { Form, Formik } from 'formik';
import { FormikForm } from '@/components/FormikForm';
import PrimaryBtn from '../../../components/UI/PrimaryBtn';
import Cross from '@/images/icons/Cross';

const SSNModal = ({ open, setOpen }) => {
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="fixed inset-0 z-1000 overflow-y-auto">
          <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-auto w-full sm:max-w-lg">
              <div className="bg-white p-6">
                <div className='flex justify-between items-center pb-4 border-b border-[#0000001A]'>
                  <h3 className='text-2xl font-medium '>Identification</h3>
                  <button className="text-sm font-semibold text-[#000000] hover:text-gray-900" onClick={() => setOpen(false)}>
                    <Cross />
                  </button>
                </div>
                <div className='my-4'>
                  <Formik
                    enableReinitialize
                    initialValues={{ firstName: "", lastName: "", dateOfBirth: "", phoneNumber: "" }}
                  // validationSchema={dateSchema}
                  // onSubmit={onSubmit}
                  >
                    {({ handleSubmit }) => {
                      return (
                        <>
                          <Form onSubmit={handleSubmit}>
                            <FormikForm.Input name="firstName" placeholder='Enter your first name' label='First Name' inlineStyle="mb-5" styles='placeholder-[#00000066]  placeholder-sm' />
                            <FormikForm.Input name="lastName" placeholder='Enter your last name' label='Last Name' inlineStyle="mb-5" styles='placeholder-[#00000066]  placeholder-sm' />
                            <FormikForm.DatePicker placeholder='Enter your date of birth' label="Date of Birth" name="dateOfBirth" inlineStyle="mb-5" styles='placeholder-[#00000066]  placeholder-sm' />
                            <FormikForm.Input name="phoneNumber" placeholder='Enter your phone number' label='Phone Number' inlineStyle="mb-5" styles='placeholder-[#00000066]  placeholder-sm' />
                            <PrimaryBtn title='Submit' className='w-full mt-10 text-2xl font-normal' />
                          </Form>
                        </>
                      );
                    }}

                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SSNModal;