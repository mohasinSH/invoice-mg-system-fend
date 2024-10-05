import React, { useState } from 'react';

const CreateCustomer = () => {
  const [companyName, setCompanyName] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., send data to an API)
    console.log({
      company_name: companyName,
      customer_name: customerName,
    });
    // Clear the form after submission
    setCompanyName('');
    setCustomerName('');
  };
  
  return (
    <div className="flex justify-center items-center bg-gray-100 flex-1 ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
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
    </div>
  );
};

export default CreateCustomer;
