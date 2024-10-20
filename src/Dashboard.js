import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import { FaHome, FaUsers, FaFileInvoice, FaBuilding, FaPeopleCarry } from 'react-icons/fa'; // Import your icons

const Dashboard = () => {
  const location = useLocation();

  // Define a mapping of paths to icons
  const pathIcons = {
    '/home': <FaHome />,
    '/home/profile': <FaUsers />,
    '/home/create-invoice': <FaFileInvoice />,
    '/home/company-view': <FaBuilding />,
    '/home/customer': <FaPeopleCarry />,
    // Add more paths and their corresponding icons as needed
  };

  // Get the icon based on the current path or default to a generic icon
  const currentIcon = pathIcons[location.pathname] || <FaHome />;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-1">
        <SideBar />
        <div className='bg-white flex-auto basis-5/6 flex flex-col'>
          <div className='basis-1/12 bg-white-200 p-4'>
            <div className='bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-white text-xl font-semibold rounded-md py-2 px-4 shadow-md ml-4 flex items-center'>
              {currentIcon} {/* Render the icon next to the path */}
              <span className="ml-2">Current Path: {location.pathname}</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
