import React, { useState } from 'react';

const CompanyName = () => {
  // State for companies and search filter
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Tech Solutions' },
    { id: 2, name: 'Global Industries' },
    { id: 3, name: 'Startup Innovations' },
    { id: 4, name: 'Enterprise Systems' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle company deletion
  const handleDelete = (id) => {
    const updatedCompanies = companies.filter(company => company.id !== id);
    setCompanies(updatedCompanies);
  };

  // Handle edit action
  const handleEdit = (id) => {
    alert(`Edit company with ID: ${id}`);
  };

  // Filtered companies based on search term
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search filter input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 w-full border border-gray-300 rounded-lg"
        />
      </div>

      {/* Companies list */}
      <table className="w-full table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Company ID</th>
            <th className="px-4 py-2">Company Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(company => (
              <tr key={company.id} className="border-t">
                <td className="px-4 py-2">{company.id}</td>
                <td className="px-4 py-2">{company.name}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(company.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(company.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-4 py-2 text-center">
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
