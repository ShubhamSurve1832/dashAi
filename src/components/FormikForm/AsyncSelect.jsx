import React from 'react';

// EXTERNAL LIBRARY
import { useField, useFormikContext } from 'formik';
import ReactAsyncSelect from 'react-select/async';

import makeAnimated from "react-select/animated";

export const animatedComponents = makeAnimated();

const AsyncSelect = (props) => {

  const { name, label, onChange, options, containerStyle, inlineStyle, onInputChange, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldTouched, setFieldValue } = useFormikContext();

  const renderError = () => {
    return (
      meta.touched && meta.error ? (
        <p className="text-red-600 text-xs">{meta.error}</p>
      ) : null
    )
  }

  return (
    <div className={containerStyle ? containerStyle : ""} style={inlineStyle}>
      {
        label && <label
          htmlFor={name + '-id'}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      }

      <ReactAsyncSelect
        isClearable={true}
        id={name + '-id'}
        className='mb-3 aitek-input rounded-md'
        onInputChange={(e) => {
          if (onInputChange) onInputChange(e)
        }}
        name={name}
        components={animatedComponents}
        {...field}
        onChange={(val) => {
          if (onChange) onChange({ target: { value: val.value, name, label: val.label, config: val.config } });
          setFieldTouched(name, true);
          setFieldValue(name, val ? val : []);
        }}
        onMenuOpen={() => {
          setFieldTouched(name, true);
        }}
        {...rest}
      />
      {renderError()}
    </div>
  );
}


export default AsyncSelect