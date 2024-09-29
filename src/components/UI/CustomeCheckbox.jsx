import React from 'react';
import { useField } from 'formik';

const CustomCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <label className="flex items-center space-x-3 p-4 border-2 border-yellow-500 rounded-md bg-[#FFF7E5] cursor-pointer">
            <FormikForm.CheckBox name="singedLoan" placeholder='' label='Signed Loan Agreement' styles='placeholder-[#00000066]  placeholder-sm' />
            <div
                className={`w-6 h-6 border-2 flex items-center justify-center ${field.checked ? 'bg-purple-500 border-purple-500' : 'border-purple-500'
                    } rounded-md`}
            >
                {field.checked && (
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>
            <span className="text-gray-700">{label}</span>
        </label>
    );
};

export default CustomCheckbox;
