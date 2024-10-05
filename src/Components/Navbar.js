import React from 'react'
const Navbar = () => {
  return (
    <div className='bg-blue-700 h-16 flex flex-row'>
      <div className='basis-11/12 py-3 px-5 text-2xl text-white font-mono'>Invoice Managment System</div>
      <div className='basis-1/12 h-8  my-4 mx-2 bg-green-500 hover:bg-green-700 text-white font-bold cursor-pointer text-center rounded-sm '>Logout</div>
    </div>
  )
}

export default Navbar
