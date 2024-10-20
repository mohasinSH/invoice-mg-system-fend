import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTrash } from 'react-icons/fa';

const ViewCustomer = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch customers from the API
  useEffect(() => {
    axios.get('http://localhost:8000/customer')
      .then(response => {
        setCustomers(response.data); // Assuming response contains an array of customer objects
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error);
      });
  }, []);

  // Filter customers based on the search input
  const filteredCustomers = customers.filter((customer) =>
    customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete a customer
  const handleDelete = (customerId) => {
    axios.delete(`http://localhost:8000/customer/${customerId}`)
      .then(() => {
        // Update the state after successful deletion
        setCustomers(customers.filter(customer => customer.customer_id !== customerId));
      })
      .catch(error => {
        console.error('There was an error deleting the customer!', error);
      });
  };

  const handleAddCustomer = () => {
    navigate('/home/create-customer');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Customers</h2>

      {/* Search Input */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by customer name or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Customer Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Customer ID</th>
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Customer Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Company Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.customer_id} className="border-t hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-300 text-gray-800 font-medium">{customer.customer_id}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-800 font-medium">{customer.customer_name}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-gray-800 font-medium">{customer.company_name}</td>
              <td className="px-4 py-2 border-b border-gray-300 text-center">
                <button 
                  onClick={() => handleDelete(customer.customer_id)} 
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded flex items-center justify-center"
                >
                  <FaTrash className="mr-1" /> {/* Add delete icon */}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Customer Button */}
      <div className="mt-4 flex justify-center">
        <button 
          onClick={handleAddCustomer} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <FaPlus className="mr-1" /> {/* Add plus icon */}
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default ViewCustomer;
