import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const CompanyName = () => {
  // State for companies and search filter
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch companies data from the API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/company');
        setCompanies(response.data); // Assuming response.data contains the company array
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle company deletion
  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the server
      const response = await axios.delete(`https://invoice-mg-system-bkend-890.onrender.com/company/${id}`);
      
      if (response.status === 200) {
        // Remove the deleted company from the state
        const updatedCompanies = companies.filter(company => company.company_id !== id);
        setCompanies(updatedCompanies);
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting company:', error);
      alert('Error deleting company');
    }
  };

  // Handle edit action (Pay action)
  const handleEdit = (id) => {
    alert(`Pay for company with ID: ${id}`);
  };

  // Filtered companies based on search term
  const filteredCompanies = companies.filter(company =>
    company.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search filter input */}
      <div className="mb-4 flex items-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Companies list */}
      <table className="w-full table-auto bg-white shadow-md rounded-lg border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Company ID</th>
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Company Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Total Amount</th>
            <th className="px-4 py-2 border-b border-gray-300 text-lg font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <tr key={company.company_id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2 text-center border-b border-gray-300 text-gray-800 font-medium">{company.company_id}</td>
                <td className="px-4 py-2 text-left border-b border-gray-300 text-gray-800 font-medium">{company.company_name}</td>
                <td className="px-4 py-2 text-center border-b border-gray-300 text-gray-800 font-medium">₹{company.company_total ? company.company_total : 'N/A'}</td>
                <td className="px-4 py-2 text-center border-b border-gray-300 flex justify-center">
                  <button
                    onClick={() => handleEdit(company.company_id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600 flex items-center"
                  >
                    <PencilSquareIcon className="h-5 w-5 mr-1" />
                    Pay
                  </button>
                  <button
                    onClick={() => handleDelete(company.company_id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 flex items-center"
                  >
                    <TrashIcon className="h-5 w-5 mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-center border-b border-gray-300 text-gray-500 font-medium">
                No companies found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyName;
