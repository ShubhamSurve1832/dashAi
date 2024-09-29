// EXTERNAL LIBRARY
import { useField, useFormikContext } from 'formik';

const RadioGroup = (props) => {

  const { name, label, onChange, options, className, ...rest } = props;
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
          className="text-base font-semibold leading-7 text-gray-900"
        >
          {label}
        </label>
      }
      <div className={` ${className} p-3 grid gap-3`}>
        {options.map((option, index) => {
          return (
            <div className="flex gap-2 items-center min-w-[100px]" key={option.value + '-key-' + index} >
              <input
                id={option.value + '-id'}
                
                {...field}
                value={option.value}
                checked={option.value == field.value}
                type={"radio"}
                onChange={(e) => {
                  if (onChange)
                    onChange(e);
                  setFieldTouched(name, true);
                  setFieldValue(name, e.target.value);
                }}
                {...rest}
              />
              <label htmlFor={option.value + '-id'}>{option.label}</label>
              <p></p>
            </div>)
        })}
      </div>
      {renderError()}
    </div>
  )
}

export default RadioGroup