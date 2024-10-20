import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import { FaUsers, FaFileInvoice, FaBuilding, FaPeopleCarry } from 'react-icons/fa'; // Import the icons
import axios from 'axios';

const TrackBoard = () => {
  
  const [customerCount, setCustomerCount] = useState(0);
  const [invoiceCount, setInvoiceCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);

 
  useEffect(() => {
    const fetchCounts = async () => {
      try {
       
        const customerResponse = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/customer');
        setCustomerCount(customerResponse.data.length); 

        const invoiceResponse = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/invoice');
        setInvoiceCount(invoiceResponse.data.length); 
      
        const companyResponse = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/company');
        setCompanyCount(companyResponse.data.length); 

      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className='basis-11/12 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center'>

      <Card name='Customers' count={customerCount} color="bg-green-500" icon={FaUsers} />
      <Card name='Invoice' count={invoiceCount} color="bg-blue-500" icon={FaFileInvoice} />
      <Card name='Company' count={companyCount} color="bg-yellow-500" icon={FaBuilding} />
      <Card name='Vendors' count={0} color="bg-red-500" icon={FaPeopleCarry} /> {/* No data for vendors yet */}
    </div>
  );
};

export default TrackBoard;
