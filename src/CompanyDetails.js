import React, { useState } from 'react';

const CompanyDetails = () => {
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
    // Handle the form submission logic (e.g., send data to an API)
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
    // Clear the form after submission
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
          {/* Company Name */}
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

          {/* Address */}
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

          {/* Landline No */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landline_no">
              Landline No
            </label>
            <input
              type="text"
              id="landline_no"
              value={landlineNo}
              onChange={(e) => setLandlineNo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Email and Website */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                Website
              </label>
              <input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Customer Prefix and Invoice Prefix */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer_prefix">
                Customer Prefix
              </label>
              <input
                type="text"
                id="customer_prefix"
                value={customerPrefix}
                onChange={(e) => setCustomerPrefix(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoice_prefix">
                Invoice Prefix
              </label>
              <input
                type="text"
                id="invoice_prefix"
                value={invoicePrefix}
                onChange={(e) => setInvoicePrefix(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* GSTIN No */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gstin_no">
              GSTIN No
            </label>
            <input
              type="text"
              id="gstin_no"
              value={gstinNo}
              onChange={(e) => setGstinNo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Bank Account No, IFSC Code, and Bank Name */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/3 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank_account_no">
                Bank Account No
              </label>
              <input
                type="text"
                id="bank_account_no"
                value={bankAccountNo}
                onChange={(e) => setBankAccountNo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/3 px-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank_ifsc_code">
                Bank IFSC Code
              </label>
              <input
                type="text"
                id="bank_ifsc_code"
                value={bankIfscCode}
                onChange={(e) => setBankIfscCode(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/3 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank_name">
                Bank Name
              </label>
              <input
                type="text"
                id="bank_name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>

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

export default CompanyDetails;
