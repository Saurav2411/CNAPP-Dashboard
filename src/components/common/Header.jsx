import React from 'react';
import { ChevronRight, Bell, User, ChevronDown, MoreVertical, RotateCcw, Clock } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = ({ onSearch, searchTerm }) => {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span className="text-gray-500">Home</span>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-blue-600 font-medium">Dashboard V2</span>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between">
        {/* Left Section - Title */}
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-800 rounded mr-3 flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-white rotate-90" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">CNAPP Dashboard</h1>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-8">
          <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
        </div>

        {/* Right Section - Controls */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <span className="mr-2 text-sm">Add Widget</span>
            <div className="w-8 h-8 bg-white border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50">
              <span className="text-lg">+</span>
            </div>
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <RotateCcw className="w-4 h-4 text-gray-600" />
          </button>

          <button className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>

          {/* Time Period Selector */}
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
            <Clock className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Last 2 days</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
            
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
