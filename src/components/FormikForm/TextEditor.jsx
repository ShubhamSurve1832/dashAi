
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value }) => {
    return (
        <div className='container 2xl:mt-14 mt-10 h-48'>
            <ReactQuill
                value={value}
                readOnly={true}
                theme="bubble"
            />
        </div>
    )
}

export default TextEditor