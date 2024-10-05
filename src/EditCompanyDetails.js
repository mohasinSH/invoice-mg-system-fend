import React, { useState } from 'react';

const EditCompanyDetails = () => {
  // List of companies for the dropdown
  const companyList = [
    { id: 1, name: 'Tech Solutions' },
    { id: 2, name: 'Global Industries' },
    { id: 3, name: 'Startup Innovations' },
    { id: 4, name: 'Enterprise Systems' },
  ];

  // State variables
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [alternateMobileNo, setAlternateMobileNo] = useState('');
  const [landlineNo, setLandlineNo] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [customerPrefix, setCustomerPrefix] = useState('');
  const [invoicePrefix, setInvoicePrefix] = useState('');
  const [gstinNo, setGstinNo] = useState('');
  const [bankAccountNo, setBankAccountNo] = useState('');
  const [bankIfscCode, setBankIfscCode] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      company_name: companyName,
      address,
      mobile_no: mobileNo,
      alternate_mobile_no: alternateMobileNo,
      landline_no: landlineNo,
      email,
      website,
      customer_prefix: customerPrefix,
      invoice_prefix: invoicePrefix,
      gstin_no: gstinNo,
      bank_account_no: bankAccountNo,
      bank_ifsc_code: bankIfscCode,
      bank_name: bankName,
    });

    // Clear form after submission
    setCompanyName('');
    setAddress('');
    setMobileNo('');
    setAlternateMobileNo('');
    setLandlineNo('');
    setEmail('');
    setWebsite('');
    setCustomerPrefix('');
    setInvoicePrefix('');
    setGstinNo('');
    setBankAccountNo('');
    setBankIfscCode('');
    setBankName('');
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 flex-1">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Company Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Name Dropdown */}
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
              <option value="" disabled>Select a company</option>
              {companyList.map((company) => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>

          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Mobile No and Alternate Mobile No */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile_no">
                Mobile No
              </label>
              <input
                type="text"
                id="mobile_no"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alternate_mobile_no">
                Alternate Mobile No
              </label>
              <input
                type="text"
                id="alternate_mobile_no"
                value={alternateMobileNo}
                onChange={(e) => setAlternateMobileNo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Other fields (Landline No, Email, Website, etc.) */}
          {/* Keep the rest of the form fields as they were before */}
          {/* ... */}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCompanyDetails;
