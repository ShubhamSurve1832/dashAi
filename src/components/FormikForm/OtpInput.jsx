import { useField, useFormikContext } from 'formik';
import clsx from 'clsx'
import ReactOtpInput from 'react-otp-input';

const formClasses =
  'block  appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'


const OtpInput = (props) => {
  const { name, label, onChange, numberOfDigits, inputType, required, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldTouched, setFieldValue } = useFormikContext();


  const renderError = () => {
    return (
      meta.touched && meta.error ? (
        <div className="text-red-600 text-xs">{meta.error}</div>
      ) : null
    )
  }

  return (
    <div>
      {
        label && <label
          htmlFor={name + '-id'}
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      }
      <ReactOtpInput
        inputType={inputType}
        value={field.value}
        containerStyle="mt-3"
        onChange={(val) => {
          if (onChange)
            onChange(val);
          setFieldTouched(name, true);
          setFieldValue(name, val);
        }}
        numInputs={numberOfDigits}
        renderSeparator={<span>&nbsp;</span>}
        renderInput={(props) => <input {...props} className='rounded-md border p-4 !w-12 !border-[#B6B4B3] 2xl:!h-[50px] 2xl:!w-[50px] h-[50px]' />}
        className={clsx(formClasses, {
          "p-invalid": meta.touched && meta.error
        })}
        {...rest}
      />
      {renderError()}
    </div>
  );

}

export default OtpInput