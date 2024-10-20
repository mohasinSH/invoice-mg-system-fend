import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

const EditCompanyDetails = () => {
  const [companyList, setCompanyList] = useState([]); // List of companies fetched from API
  const [selectedCompany, setSelectedCompany] = useState(null); // The selected company object
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    address: '',
    mobileNo: '',
    alternateMobileNo: '',
    landlineNo: '',
    email: '',
    website: '',
    logo: '',
    customerPrefix: '',
    invoicePrefix: '',
    gstinNo: '',
    panNo: '',
    bankAccountNo: '',
    bankIfscCode: '',
    bankName: '',
    bankTotal:''
  });

  // Fetch all companies from the API
  useEffect(() => {
    axios.get('https://invoice-mg-system-bkend-890.onrender.com/company')
      .then((response) => {
        setCompanyList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching companies:', error);
        toast.error("Error fetching company data!");
      });
  }, []);

  // Handle the company selection from dropdown
  const handleCompanySelect = (e) => {
    const selectedId = e.target.value;
    const company = companyList.find((comp) => comp.company_id === parseInt(selectedId));

    if (company) {
      setSelectedCompany(company);

      // Autofill the form with the selected company's details
      setCompanyDetails({
        companyName: company.company_name,
        address: company.address,
        mobileNo: company.mobile_no,
        alternateMobileNo: company.alternate_mobile_no,
        landlineNo: company.landline_no,
        email: company.email,
        website: company.website,
        logo: company.logo,
        customerPrefix: company.customer_prefix,
        invoicePrefix: company.invoice_prefix,
        gstinNo: company.gstin,
        panNo: company.panno,
        bankAccountNo: company.bank_account_no,
        bankIfscCode: company.bank_ifsc_code,
        bankName: company.bank_name,
        bankTotal: company.company_total
      });
    }
  };

  // Handle input change for each field
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCompanyDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Submit the updated company details via PUT request
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCompany) {
      axios.put(`https://invoice-mg-system-bkend-890.onrender.com/company/${selectedCompany.company_id}`, {
        company_name: companyDetails.companyName,
        address: companyDetails.address,
        mobile_no: companyDetails.mobileNo,
        alternate_mobile_no: companyDetails.alternateMobileNo,
        landline_no: companyDetails.landlineNo,
        email: companyDetails.email,
        website: companyDetails.website,
        logo: companyDetails.logo,
        customer_prefix: companyDetails.customerPrefix,
        invoice_prefix: companyDetails.invoicePrefix,
        gstin: companyDetails.gstinNo,
        panno: companyDetails.panNo,
        bank_name: companyDetails.bankName,
        bank_account_no: companyDetails.bankAccountNo,
        bank_ifsc_code: companyDetails.bankIfscCode,
        company_total: companyDetails.bankTotal
      })
      .then((response) => {
        toast.success("Company details updated successfully!");
        console.log('Company details updated:', response.data);
      })
      .catch((error) => {
        toast.error("Error updating company details!");
        console.error('Error updating company details:', error);
      });
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 flex-1">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Company Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
              Company Name
            </label>
            <select
              id="company_name"
              value={selectedCompany ? selectedCompany.company_id : ''}
              onChange={handleCompanySelect}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>Select a company</option>
              {companyList.map((company) => (
                <option key={company.company_id} value={company.company_id}>
                  {company.company_name}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={companyDetails.address}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Mobile No and Alternate Mobile No */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNo">Mobile No</label>
              <input
                type="text"
                id="mobileNo"
                value={companyDetails.mobileNo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alternateMobileNo">Alternate Mobile No</label>
              <input
                type="text"
                id="alternateMobileNo"
                value={companyDetails.alternateMobileNo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Landline No */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="landlineNo">Landline No</label>
            <input
              type="text"
              id="landlineNo"
              value={companyDetails.landlineNo}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Email, Website, and Logo */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/3 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={companyDetails.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/3 px-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">Website</label>
              <input
                type="url"
                id="website"
                value={companyDetails.website}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/3 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo">Logo URL</label>
              <input
                type="text"
                id="logo"
                value={companyDetails.logo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Customer Prefix and Invoice Prefix */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerPrefix">Customer Prefix</label>
              <input
                type="text"
                id="customerPrefix"
                value={companyDetails.customerPrefix}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoicePrefix">Invoice Prefix</label>
              <input
                type="text"
                id="invoicePrefix"
                value={companyDetails.invoicePrefix}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* GSTIN and PAN No */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gstinNo">GSTIN</label>
              <input
                type="text"
                id="gstinNo"
                value={companyDetails.gstinNo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="panNo">PAN No</label>
              <input
                type="text"
                id="panNo"
                value={companyDetails.panNo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Bank Account No and IFSC Code */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankAccountNo">Bank Account No</label>
              <input
                type="text"
                id="bankAccountNo"
                value={companyDetails.bankAccountNo}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankIfscCode">Bank IFSC Code</label>
              <input
                type="text"
                id="bankIfscCode"
                value={companyDetails.bankIfscCode}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Bank Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName">Bank Name</label>
            <input
              type="text"
              id="bankName"
              value={companyDetails.bankName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EditCompanyDetails;
