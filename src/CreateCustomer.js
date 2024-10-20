import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const CreateCustomer = () => {
  const [companyName, setCompanyName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [companies, setCompanies] = useState([]);

  // Fetch the list of companies from the API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/company');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = {
      customer_name: customerName,
      company_name: companyName,
    };

    try {
      const response = await axios.post('https://invoice-mg-system-bkend-890.onrender.com/customer', customerData);
      console.log('Customer created:', response.data);

      // Show success toast
      toast.success('Customer created successfully!', {
        position: 'top-right'
      });

      // Clear the form after submission
      setCompanyName('');
      setCustomerName('');
    } catch (error) {
      console.error('Error creating customer:', error);
      // Show error toast
      toast.error('Error creating customer. Please try again.', {
        position: 'top-right'
      });
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 flex-1">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
              Company Name
            </label>
            <select
              id="company_name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a company</option>
              {companies.map((company) => (
                <option key={company.id} value={company.company_name}>
                  {company.company_name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer_name">
              Customer Name
            </label>
            <input
              type="text"
              id="customer_name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Create Customer
          </button>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default CreateCustomer;
