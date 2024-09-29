// EXTERNAL LIBRARY
import { fileValidator } from '@/utils/helper';
import { useField, useFormikContext } from 'formik';

const SimpleFileUpload = (props) => {

    const { name, label, updateFilesCb, ...rest } = props;
    const [field, meta] = useField(name);
    const { setFieldTouched, setFieldValue } = useFormikContext();

    const renderError = () => {
        return (
            meta.touched && meta.error ? (
                <div className="text-red-600 text-xs">{meta.error}</div>
            ) : null
        )
    }

    const handleNewFileUpload = (e) => {
        // if (!e.target.files[0].name) return;
        const fileValid = fileValidator(e.target.files)
        if (fileValid != 'success') return
        updateFilesCb(e.target.files);
        setFieldTouched(name, true);
        setFieldValue(name, e.target.value);
    };

    return (
        <div>
            {
                label && <label
                    htmlFor={name + '-id'}
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            }
            <input
                type="file"
                id={name + '-id'}
                name={name}
                className="form-control"
                {...field}
                filename={field.value}
                {...rest}
                onChange={handleNewFileUpload}
                multiple
                accept='image/png, image/jpeg, image/jpg, application/pdf, application/msword'
            />
            {renderError()}
        </div>
    )
}

export default SimpleFileUpload