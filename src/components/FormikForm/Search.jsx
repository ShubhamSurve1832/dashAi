import _ from "lodash"

const Search = ({ getLists, label, extraStyle, containerStyle }) => {

    const debouncedHandleSearch = _.debounce((inputText) => {
        if (inputText.length >= 3 || inputText.length == 0) {
            getLists({ query: inputText })
        }
    }, 1000);

    const handleSearch = (e) => {
        const value = e.target.value;
        debouncedHandleSearch(value);
    };
    return (
        <div className={`${containerStyle ? containerStyle : ""} w-full`}>
            <label
                className="mb-1 block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input type="text" className={`${extraStyle ? extraStyle : ""} block w-33 appearance-none rounded-md border border-gray-400 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm`} onChange={handleSearch} />
        </div>
    )
}

export default Search