import React from 'react'

const RangeSelect = (props) => {
    const { name, label, value, onChange, styles, placeholder, inlineStyle, ...rest } = props;
    return (
        <div className={`p-4 rounded-lg border border-gray-200 w-full max-w-md mx-auto ${styles}`}>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Vehicle MSRP</h3>
            <div className="relative">
                {/* Slider */}
                <input
                    type="range"
                    min="1000"
                    max="3000"
                    // value={value}
                    // onChange={handleSliderChange}
                    className={`w-full h- bg-purple-200 rounded-lg appearance-none cursor-pointer focus:outline-none range-slider ${inlineStyle}`}
                />
            </div>
            {/* Range Values */}
            <div className="flex justify-between mt-2">
                <span className="text-gray-600">$1000</span>
                <span className="text-gray-600">$3000</span>
            </div>
        </div>
    )
}

export default RangeSelect