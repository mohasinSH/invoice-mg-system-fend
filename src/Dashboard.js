import React from 'react';
import Card from './Components/Card';
import CreateCustomer from './CreateCustomer';
import CompanyDetails from './CompanyDetails';
import CreateInvoice from './CreateInvoice';
import ViewInvoice from './ViewInvoice';
import ViewCustomer from './ViewCustomer';
import TrackBoard from './TrackBoard';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
<div className="flex flex-col h-screen "> 
<Navbar/>
    <div className="flex flex-row flex-1">
<SideBar/>
    <div className='bg-white flex-auto basis-5/6 flex flex-col'>
      <div className='basis-1/12 bg-green-200'>/Routes</div>
      <Outlet/>
      {/* <TrackBoard/> */}
      {/* <CreateCustomer/> */}
      {/* <CompanyDetails/> */}
      {/* <CreateInvoice/> */}
      {/* <ViewInvoice/> */}
      {/* <ViewCustomer/> */}
    </div>
    </div>
    </div>
  );
}

export default Dashboard;
