

// EXTERNAL LIBRARY
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx'
// import { useTranslation } from 'react-i18next';


const formClasses = 'block w-full rounded-md aitek-input mt-1 block w-full rounded-md border !border-[#CCCCCC] p-2'

const Select = (props) => {

    const { name, placeholder, label, onChange, options, disabled = false, required, styles, ...rest } = props;
    const [field, meta] = useField(name);

    const { setFieldTouched, setFieldValue } = useFormikContext();
    // const { t } = useTranslation()

    const renderError = () => {
        return (
            meta.touched && meta.error ? (
                <p className="text-red-600 text-xs">{meta.error}</p>
            ) : null
        )
    }
    return (
        <div className='mb-3'>
            {
                label &&
                <label
                    htmlFor={name + '-id'}
                    className="block text-base font-semibold text-[#150C0B] mb-2 tracking-[1px]"
                >
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            }
            <select
                disabled={disabled}
                id={name + '-id'}
                name={name}
                {...field}
                placeholder={placeholder}
                onChange={(e) => {
                    if (onChange) onChange(e);
                    setFieldTouched(name, true);
                    setFieldValue(name, e.target.value);
                }}
                className={clsx(formClasses, styles, disabled ? "disabled" : "", {
                    "p-invalid": meta.touched && meta.error,
                    'placeholder-style': !field.value,
                })}
                {...rest}
            >
                <option value={''} hidden>Select</option>
                {options?.map((curr, idx) => {
                    return (
                        <option key={idx} value={curr.value} className='text-black'>{curr.label}</option>
                    )
                })}
            </select>
            {renderError()}
        </div>
    );
}
export default Select