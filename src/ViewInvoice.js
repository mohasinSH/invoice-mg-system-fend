import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon, TrashIcon } from '@heroicons/react/24/solid'; // Importing icons

const ViewInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 
  useEffect(() => {
    axios.get('https://invoice-mg-system-bkend-890.onrender.com/invoice')
      .then(response => {
        setInvoices(response.data); 
      })
      .catch(error => {
        console.error('There was an error fetching the invoices!', error);
      });
  }, []);


  const handleDelete = (srNo) => {
    axios.delete(`https://invoice-mg-system-bkend-890.onrender.com/invoice/${srNo}`)
      .then(() => {
       
        setInvoices(invoices.filter(invoice => invoice.invoice_id !== srNo));
      })
      .catch(error => {
        console.error('There was an error deleting the invoice!', error);
      });
  };


  const filteredInvoices = invoices.filter((invoice) =>
    invoice.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.customer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">View Invoices</h2>

      {/* Search input */}
      <div className="mb-4 flex items-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
        <input
          type="text"
          className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by customer name or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Invoice Table */}
      <table className="min-w-full bg-white max-w-xl mx-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border-b border-gray-300 text-left text-lg font-semibold text-gray-700">Sr. No.</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-lg font-semibold text-gray-700">Customer Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-lg font-semibold text-gray-700">Company Name</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-lg font-semibold text-gray-700">Bill Amount</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-lg font-semibold text-gray-700">Date</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-lg font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice) => (
              <tr key={invoice.invoice_id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2 text-center border-b border-gray-300 text-gray-800 font-medium">{invoice.invoice_id}</td>
                <td className="px-4 py-2 text-left border-b border-gray-300 text-gray-800 font-medium">{invoice.customer_name}</td>
                <td className="px-4 py-2 text-left border-b border-gray-300 text-gray-800 font-medium">{invoice.company_name}</td>
                <td className="px-4 py-2 text-center border-b border-gray-300 text-gray-800 font-medium">{invoice.bill_amount}</td>
                <td className="px-4 py-2 text-center border-b border-gray-300 text-gray-800 font-medium">{invoice.date}</td>
                <td className="px-4 py-2 text-center border-b border-gray-300">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded flex items-center justify-center"
                    onClick={() => handleDelete(invoice.invoice_id)}
                  >
                    <TrashIcon className="h-5 w-5 mr-1" />
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center border-b border-gray-300 text-gray-500 font-medium">
                No invoices found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewInvoice;
