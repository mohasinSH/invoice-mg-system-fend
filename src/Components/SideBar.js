import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserIcon,
  PencilSquareIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  EyeIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid'; // Import Heroicons for each section

const SideBar = () => {
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);

  const ToggleInvoiceDropDown = () => {
    setIsInvoiceOpen(!isInvoiceOpen);
  };

  const ToggleProfileDropDown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const ToggleCustomerDropDown = () => {
    setIsCustomerOpen(!isCustomerOpen);
  };

  return (
    <div className="bg-white flex-auto basis-1/6">
      <div className="flex flex-col h-full">
        <Link to="/home">
          <div className="h-20 bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-400 shadow-lg flex items-center justify-center space-x-2">
            <HomeIcon className="h-6 w-6" /> {/* Home Icon */}
            <span>DashBoard</span>
          </div>
        </Link>

        {/* Profile Section */}
        <div
          className="h-20 bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-400 shadow-lg flex items-center justify-center space-x-2"
          onClick={ToggleProfileDropDown}
        >
          <UserIcon className="h-6 w-6" /> {/* Profile Icon */}
          <span>Profile</span>
        </div>
        <div>
          {isProfileOpen && (
            <div className="flex flex-col">
              <Link to="/home/profile">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <UserPlusIcon className="h-5 w-5" /> {/* CreateProfile Icon */}
                  <span>CreateProfile</span>
                </div>
              </Link>
              <Link to="/home/edit-company">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <PencilSquareIcon className="h-5 w-5" /> {/* EditProfile Icon */}
                  <span>EditProfile</span>
                </div>
              </Link>
              <Link to="/home/company-view">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <BuildingOfficeIcon className="h-5 w-5" /> {/* ViewCompanies Icon */}
                  <span>ViewCompanies</span>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Invoice Section */}
        <div
          className="h-20 bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-400 shadow-lg flex items-center justify-center space-x-2"
          onClick={ToggleInvoiceDropDown}
        >
          <DocumentTextIcon className="h-6 w-6" /> {/* Invoice Icon */}
          <span>Invoice</span>
        </div>
        <div>
          {isInvoiceOpen && (
            <div className="flex flex-col">
              <Link to="/home/create-invoice">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <DocumentTextIcon className="h-5 w-5" /> {/* CreateInvoice Icon */}
                  <span>CreateInvoice</span>
                </div>
              </Link>
              <Link to="/home/view-invoice">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <EyeIcon className="h-5 w-5" /> {/* ViewInvoice Icon */}
                  <span>ViewInvoice</span>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Customer Section */}
        <div
          className="h-20 bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-400 shadow-lg flex items-center justify-center space-x-2"
          onClick={ToggleCustomerDropDown}
        >
          <UserIcon className="h-6 w-6" /> {/* Customer Icon */}
          <span>Customer</span>
        </div>
        <div>
          {isCustomerOpen && (
            <div className="flex flex-col">
              <Link to="/home/create-customer">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <UserPlusIcon className="h-5 w-5" /> {/* CreateCustomer Icon */}
                  <span>CreateCustomer</span>
                </div>
              </Link>
              <Link to="/home/customer">
                <div className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-6 px-4 cursor-pointer text-center border-b border-blue-300 shadow-md flex items-center justify-center space-x-2">
                  <EyeIcon className="h-5 w-5" /> {/* ViewCustomer Icon */}
                  <span>ViewCustomer</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
