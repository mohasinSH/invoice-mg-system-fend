import React from 'react'
import { useState } from 'react';
const SideBar = () => {
 const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

 const ToggleInvoiceDropDown = ()=>{
    setIsInvoiceOpen(!isInvoiceOpen);
 }
  return (
    <div className='bg-blue-500 flex-auto basis-1/6'>
    <div className=' flex flex-col h-full'>
      <div className='h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center'>DashBoard</div>
      <div className='h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center'>Profile</div>
      <div className='h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center' 
      onClick={ToggleInvoiceDropDown}
      >Invoice</div>
      <div>
      {isInvoiceOpen && (
    <div className='flex flex-col'>
      <div className='flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center'>CreateInvoice</div>
      <div className='flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center'>ViewInvoice</div>
      </div>
      )}
      </div>
      <div className='h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center'>Customer</div>
      <div className='h-28 bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4  cursor-pointer text-center'>Vendors</div>
      </div>
    </div>
  )
}

export default SideBar
