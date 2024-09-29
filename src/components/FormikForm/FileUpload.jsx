import { useState } from 'react';

import { fileValidator } from '@/utils/helper';
import { useField, useFormikContext } from 'formik';
import BlueAddIcon from '@/images/icons/BlueAddIcon';
// import ViewPrescriptionGallary from '../shared/ViewPrescriptionGallary';
// import { Add, EyeOpen, PencilEdit } from '@/config/icons';
// import UploadIcon from '@/images/icons/UploadIcon';



const FileUpload = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const { name, label,inlineStyle, updateFilesCb, multiple = false, required, ...rest } = props;
  const [field, meta] = useField(name);
  const { setFieldTouched, setFieldValue } = useFormikContext();

  const renderError = () => {
    return meta.touched && meta.error ? <p className="text-red-600 text-base absolute">{meta.error}</p> : null;
  };

  const handleNewFileUpload = (e) => {
    const fileValid = fileValidator(e.target.files)
    if (fileValid != 'success') return ''
    updateFilesCb(e.target.files, name);
    setFieldTouched(name, true);
    setFieldValue(name, e.target.value);
    const imgBlob = URL.createObjectURL(e.target.files[0])
    const size = e.target.files[0].size
    setSelectedImg({ blob: imgBlob, name: e.target.files[0].name, size: size })
  };

  return (
    <div  className={`${inlineStyle}`}>
      {
        label && <label
          htmlFor={name + '-id'}
          className="block text-base font-semibold text-[#150C0B] mb-2 tracking-[1px]"
        >
          {label}:
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      }

      {/* {!multiple && <p className='ml-4 mt-2 absolute top-full '>{selectedImg?.name || field.value} {selectedImg?.size ? `(${selectedImg?.size / 1000}KB)` : ''}</p>} */}
      <div className='relative border border-[#B6B4B3] rounded-md cursor-pointer'>
        <input
          className='mt-1 block w-full rounded-md border  !border-[#B6B4B3] py-1 px-4 relative cursor-pointer z-[999] !opacity-0'
          type="file"
          id={name + '-id'}
          name={name}
          {...field}
          {...rest}
          onChange={handleNewFileUpload}
          multiple={multiple}
          accept='image/png, image/jpeg, image/jpg, application/pdf, application/msword'
        />
        <div className='flex justify-between items-center absolute top-2 bottom-2 left-3 rounded-md right-3'>
          <div className='flex items-center gap-2 text-[#938F8F] max-sm:w-[75%]'>
            <BlueAddIcon />
            {!multiple && <p className='text-base font-semibold text-[#572E91] max-sm:truncate'>{selectedImg?.name || field.value} {selectedImg?.size ? `` : 'Upload Image'}</p>}
          </div>
          <div className='flex gap-1 items-center z-[9991]'>
            {field.value && !multiple && <button type='button' className='p-2 bg-white border-none rounded ' onClick={() => setOpen(true)}><p>EO</p></button>}
            {/* <label htmlFor={name + '-id'} className="block secondary-btn cursor-pointer ml-3">
              {(field.value && !multiple) ? <p>PE</p> : <p>UP</p>}
            </label> */}
          </div>
        </div>
        {renderError()}
        {/* {(open && !multiple) && <ViewPrescriptionGallary open={open} setOpen={setOpen} selectedImg={selectedImg || field.value} />} */}
      </div>
    </div>
  )
}

export default FileUpload