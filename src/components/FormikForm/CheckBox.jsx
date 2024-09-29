
// EXTERNAL LIBRARY
'use client'
import { useState } from 'react';
import { useField, useFormikContext } from 'formik';

const CheckBox = (props) => {

  const { name, label, onChange, required, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const [checked, setChecked] = useState(false);

  const renderError = () => {
    return (
      meta.touched && meta.error ? (
        <div className="text-red-600 text-xs">{meta.error}</div>
      ) : null
    )
  }
  return (
    <div>
      <label htmlFor={name} className='flex cursor-pointer gap-2 items-center'>
        <input
          id={name}
          type="checkbox"
          className="text-[#190AA9] rounded-sm hidden"
          name={name}
          {...field}
          onChange={(e) => {
            if (onChange) {
              onChange({ target: { name, value: e.target.checked, checked: e.target.checked }, value: e.target.value });
            }
            setFieldTouched(name, true);
            setFieldValue(name, e.target.checked);
            setChecked(!checked)
          }}
          checked={field.value ? true : false}
          {...rest}
        />
        <div
          className={`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center 
        ${checked ? 'bg-[#572E91] border-[#572E91]' : 'bg-white border-[#572E91]'}`}
        >
          {checked && (
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
        <span className="cursor-pointer text-[#000000B2] font-medium">{label}{required && <span className="text-red-600 ml-1">*</span>}</span>
      </label>
      {renderError()}
    </div>
  );
}

export default CheckBox
