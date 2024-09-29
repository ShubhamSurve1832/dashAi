
const StaticInput = ({ data, label }) => {
    return (
        <div>
            <label
                className="  block text-base mb-1 font-medium text-gray-700"
            >
                {label}
            </label>
            <input type="text" className='block w-full rounded-md ' value={data} disabled />
        </div>
    )
}

export default StaticInput