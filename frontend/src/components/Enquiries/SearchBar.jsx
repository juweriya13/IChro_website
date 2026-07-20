function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search enquiries..."
      value={value}
      onChange={onChange}
      className="w-full md:w-80 rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;