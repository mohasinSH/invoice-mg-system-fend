import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import { FaUsers, FaFileInvoice, FaBuilding, FaPeopleCarry } from 'react-icons/fa'; // Import the icons
import axios from 'axios';

const TrackBoard = () => {
  // States to store the count for each entity
  const [customerCount, setCustomerCount] = useState(0);
  const [invoiceCount, setInvoiceCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch customer count
        const customerResponse = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/customer');
        setCustomerCount(customerResponse.data.length); // Assuming the data is an array

        // Fetch invoice count
        const invoiceResponse = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/invoice');
        setInvoiceCount(invoiceResponse.data.length); // Assuming the data is an array

        // Fetch company count
        const companyResponse = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/company');
        setCompanyCount(companyResponse.data.length); // Assuming the data is an array

      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className='basis-11/12 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center'>
      {/* Pass the name, count, color, and icon for each card */}
      <Card name='Customers' count={customerCount} color="bg-green-500" icon={FaUsers} />
      <Card name='Invoice' count={invoiceCount} color="bg-blue-500" icon={FaFileInvoice} />
      <Card name='Company' count={companyCount} color="bg-yellow-500" icon={FaBuilding} />
      <Card name='Vendors' count={0} color="bg-red-500" icon={FaPeopleCarry} /> {/* No data for vendors yet */}
    </div>
  );
};

export default TrackBoard;
