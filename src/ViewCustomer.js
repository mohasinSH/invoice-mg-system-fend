import React, { useState } from 'react';

const ViewCustomer = () => {
  const [customers, setCustomers] = useState([
    { customerId: 'C001', customerName: 'John Doe', companyName: 'TechCorp' },
    { customerId: 'C002', customerName: 'Jane Smith', companyName: 'BizSolutions' },
    { customerId: 'C003', customerName: 'Michael Johnson', companyName: 'Innovatech' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter customers based on the search input
  const filteredCustomers = customers.filter((customer) =>
    customer.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete a customer
  const handleDelete = (customerId) => {
    const updatedCustomers = customers.filter(customer => customer.customerId !== customerId);
    setCustomers(updatedCustomers);
  };

  // Handle the "Add Customer" button click (for future logic)
  const handleAddCustomer = () => {
    console.log('Redirect to Add Customer page');
    // You can navigate to the customer creation form page here.
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Customers</h2>

      {/* Search Input */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Search by customer name or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Customer Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Customer ID</th>
            <th className="px-4 py-2 border">Customer Name</th>
            <th className="px-4 py-2 border">Company Name</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.customerId} className="border-t">
              <td className="px-4 py-2 border">{customer.customerId}</td>
              <td className="px-4 py-2 border">{customer.customerName}</td>
              <td className="px-4 py-2 border">{customer.companyName}</td>
              <td className="px-4 py-2 border">
                <button 
                  onClick={() => handleDelete(customer.customerId)} 
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
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
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default ViewCustomer;
