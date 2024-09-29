import React from 'react';
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';

const formClasses =
    'block w-full rounded-md aitek-input mt-1 block w-full rounded-md border !border-[#CCCCCC] p-2 outline-none'

const Input = (props) => {
    const { name, placeholder, inlineStyle, label, styles, type = 'text', onChange, disabled = false, required, ...rest } = props;
    const [field, meta] = useField(name);
    const { setFieldTouched, setFieldValue } = useFormikContext();

    const handleKeyDown = (e) => {
        if (type === 'number' && (e.key === 'e' || e.key === '.')) {
            e.preventDefault();
        }
    };

    const renderError = () => {
        return (
            meta.touched && meta.error ? (
                <p className="text-red-600 text-xs absolute">{meta.error}</p>
            ) : null
        )
    }
    return (
        <div className={`${inlineStyle}`} >
            {label && (
                <label htmlFor={name + '-id'} className="block text-base font-semibold text-[#150C0B] mb-2 tracking-[1px]">
                    {label}
                    {required && <span className="text-red-600 ml-1">*</span>}
                </label>
            )}

            {type === 'textarea' ? (
                <textarea
                    rows={4}
                    id={name + '-id'}
                    name={name}
                    {...field}
                    autoComplete="off"
                    placeholder={placeholder}
                    onChange={(e) => {
                        if (onChange) onChange(e);
                        setFieldTouched(name, true);
                        setFieldValue(name, e.target.value);
                    }}
                    className={clsx(formClasses, {
                        'p-invalid': meta.touched && meta.error,
                    })}
                    {...rest}
                />
            ) : (
                <input
                    disabled={disabled}
                    id={name + '-id'}
                    name={name}
                    {...field}
                    type={type ? type : 'text'}
                    autoComplete="off"
                    placeholder={placeholder}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => {
                        if (onChange) onChange(e);
                        setFieldTouched(name, true);
                        setFieldValue(name, e.target.value);
                    }}
                    className={clsx(formClasses, styles, disabled ? 'disabled' : '', {
                        'p-invalid': meta.touched && meta.error,
                    })}
                    {...rest}
                />
            )}

            {renderError()}
        </div>
    );
};

export default Input;
