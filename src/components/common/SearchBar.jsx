import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, searchTerm, placeholder = "Search anything..." }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;

