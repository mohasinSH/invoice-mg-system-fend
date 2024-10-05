import React, { useState } from 'react';

const ViewInvoice = () => {
  const [invoices, setInvoices] = useState([
    { srNo: 1, customerName: 'John Doe', companyName: 'TechCorp', billAmount: 1000, date: '2024-10-01' },
    { srNo: 2, customerName: 'Jane Smith', companyName: 'BizSolutions', billAmount: 1500, date: '2024-09-15' },
    { srNo: 3, customerName: 'Michael Johnson', companyName: 'Innovatech', billAmount: 2000, date: '2024-09-10' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (srNo) => {
    setInvoices(invoices.filter((invoice) => invoice.srNo !== srNo));
  };

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Invoices</h2>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Search by customer name or company name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Invoice Table */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Sr. No.</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Company Name</th>
            <th className="px-4 py-2">Bill Amount</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice) => (
            <tr key={invoice.srNo} className="border-t">
              <td className="px-4 py-2">{invoice.srNo}</td>
              <td className="px-4 py-2">{invoice.customerName}</td>
              <td className="px-4 py-2">{invoice.companyName}</td>
              <td className="px-4 py-2">{invoice.billAmount}</td>
              <td className="px-4 py-2">{invoice.date}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDelete(invoice.srNo)}
                >
                  Delete 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewInvoice;
