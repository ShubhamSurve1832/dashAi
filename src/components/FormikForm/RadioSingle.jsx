import { useField, useFormikContext } from 'formik';

const RadioSingle = (props) => {

  const { name, onChange, className, ...rest } = props;
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
    <div className={`${className}`}>
      <div className="flex gap-2 items-center">
        <input
          id={name + '-id'}
          {...field}
          type={"radio"}
          onChange={(e) => {
            if (onChange)
              onChange(e);
            setFieldTouched(name, true);
            setFieldValue(name, e.target.value);
          }}
          {...rest}
        />
        <label className='text-base font-semibold leading-7 text-gray-900' htmlFor={name + '-id'}>{rest.label}</label>
      </div>
      {renderError()}
    </div>
  )
}

export default RadioSingle;
