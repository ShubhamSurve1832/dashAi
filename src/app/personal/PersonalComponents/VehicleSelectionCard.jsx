import { FormikForm } from '@/components/FormikForm';
import { searchVehicle } from '@/config/constants/initialValues';
import { Form, Formik } from 'formik';
import React from 'react'

const VehicleSelectionCard = () => {
    return (
        <div className='text-[#00000033] rounded-md p-5 border border-[#00000033] mt-7' >
            <Formik initialValues={searchVehicle}
                // validationSchema={profileValidationSchema}
                // onSubmit={onSubmit}
                enableReinitialize>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormikForm.Select label='Select Lendor' name='selectLendor' styles='mb-5' />
                        <div className='pt-5 border-t border-[#0000001A]'>
                            <div className='bg-[#28A8200D] border-[0.5px] border-[#28A82066] rounded-xl p-4 flex justify-between items-center'>
                                <p className='text-[#666666] text-sm font-semibold'>Dealership Margin</p>
                                <span className='text-[#0078D2] font-bold text-xl'>10%</span>
                            </div>
                        </div>
                        <FormikForm.RangeSelect styles='mt-5' />

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default VehicleSelectionCard;