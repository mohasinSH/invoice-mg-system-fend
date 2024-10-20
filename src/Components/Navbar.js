import React from 'react';
import { FiLogOut, FiFileText } from 'react-icons/fi'; // Import icons for logout and system name
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
 const navigate = useNavigate();
  const handleLogout = ()=>{
 navigate('/')
  }
  return (
    <div className='bg-gradient-to-r from-blue-600 to-blue-800 h-16 flex items-center justify-between px-6 shadow-md'>
      <div className='flex items-center space-x-2 text-3xl text-white font-mono font-semibold tracking-wide'>
        <FiFileText className='h-7 w-7' /> {/* Icon before the text */}
        <span>Invoice Management System</span>
      </div>
      <div className='flex items-center space-x-3'>
        <button 
        onClick={handleLogout}
        className='flex items-center bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-md shadow-sm transition-all duration-200 ease-in-out'>
          <FiLogOut className='mr-2' />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
