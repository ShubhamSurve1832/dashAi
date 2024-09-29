


import CalenderIcon from "@/images/icons/CalenderIcon";
import { addDate, formatTime } from "@/utils/helper";
import { useField, useFormikContext } from "formik";
import { range } from "lodash";
import ReactDatePicker from "react-datepicker";
const years = range(2000, 2051, 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DatePicker = (props) => {

  const { name, label, placeholder, disabled, interval, startDate, endDate, dateFormat, onChange, inlineStyle, ...rest } = props;

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
    <div className={`${inlineStyle}`}>
      {
        label && <label
            className="block text-base font-semibold text-[#150C0B] mb-2 tracking-[1px]"
        >
          {label}
        </label>
      }
      <div className="relative">
        <ReactDatePicker
          placeholderText={placeholder}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-center m-[10px] w-full">
              <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                {"<"}
              </button>
              <select
                value={formatTime(date, "YYYY")}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[formatTime(date, "M") - 1]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                {">"}
              </button>

            </div>
          )}
          selected={field.value}
          onChange={(date) => {
            if (onChange) onChange(date)
            setFieldTouched(name, true);
            setFieldValue(name, date);
          }}
          className="block w-full appearance-none rounded-md border placehoder:!font-light placeholder:text-[#00000066]  !border-[#CCCCCC]  p-2 "
          dateFormat={dateFormat ? dateFormat : "dd/MM/yyyy"}
          disabled={disabled}
          autoComplete="off"
          {...rest}
        />
        <lable htmlFor={name} className="absolute right-3 top-1/2 -translate-y-1/2">
          <CalenderIcon />
        </lable>
      </div>
      {renderError()}
    </div>
  );
};

export default DatePicker;
