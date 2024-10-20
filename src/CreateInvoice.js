import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const CreateInvoice = () => {
  const [companyName, setCompanyName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [gstinNo, setGstinNo] = useState('');
  const [items, setItems] = useState([{ description: '', units: 0, price: 0, total: 0 }]);
  const [companies, setCompanies] = useState([]);
  const [customers, setCustomers] = useState([]);
  
 
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/company');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://invoice-mg-system-bkend-890.onrender.com/customer');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchCompanies();
    fetchCustomers();
  }, []);

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;

    
    if (name === 'units' || name === 'price') {
      const units = parseFloat(updatedItems[index].units) || 0;
      const price = parseFloat(updatedItems[index].price) || 0;
      updatedItems[index].total = units * price;
    }

    setItems(updatedItems);
  };

  const handleAddRow = () => {
    setItems([...items, { description: '', units: 0, price: 0, total: 0 }]);
  };

  const calculateFinalTotal = () => {
    return items.reduce((acc, item) => acc + item.total, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalTotal = calculateFinalTotal();

    const invoiceData = {
      company_name: companyName,
      customer_name: customerName,
      bill_amount: finalTotal,
    };

    try {
      await axios.post('https://invoice-mg-system-bkend-890.onrender.com/invoice', invoiceData);

      const company = companies.find((company) => company.company_name === companyName);
      if (company) {
        const companyId = company.company_id;
        await axios.put(`https://invoice-mg-system-bkend-890.onrender.com/company/set-total/${companyId}`, {
          bill_amount: finalTotal,
        });
      }

     
      toast.success('Company details submitted successfully!', {
        position: 'top-right'
      });

     
      setCompanyName('');
      setCustomerName('');
      setGstinNo('');
      setItems([{ description: '', units: 0, price: 0, total: 0 }]);
    } catch (error) {
      console.error('Error submitting invoice:', error);
      // Show error toast
      toast.error('Error creating invoice. Please try again.', {
        position: 'top-right'
      });
    }
  };

  const handleCompanyChange = (e) => {
    const selectedCompanyName = e.target.value;
    setCompanyName(selectedCompanyName);

    // Set GSTIN based on selected company
    const selectedCompany = companies.find(company => company.company_name === selectedCompanyName);
    if (selectedCompany) {
      setGstinNo(selectedCompany.gstin);
    } else {
      setGstinNo('');
    }
  };

 
  const filteredCustomers = customers.filter(customer => customer.company_name === companyName);

  return (
    <div className="flex justify-center items-center bg-gray-100 flex-1">
      <div className="bg-white p-8 rounded shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Invoice</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Name Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
              Company Name
            </label>
            <select
              id="company_name"
              value={companyName}
              onChange={handleCompanyChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Company</option>
              {companies.map((company) => (
                <option key={company.company_id} value={company.company_name}>
                  {company.company_name}
                </option>
              ))}
            </select>
          </div>

          {/* Customer Name Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customer_name">
              Customer Name
            </label>
            <select
              id="customer_name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Customer</option>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <option key={customer.customer_id} value={customer.customer_name}>
                    {customer.customer_name}
                  </option>
                ))
              ) : (
                <option value="" disabled>No customers available</option>
              )}
            </select>
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
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Invoice Items Table */}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Units</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="description"
                      value={item.description}
                      onChange={(e) => handleItemChange(index, e)}
                      className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="units"
                      value={item.units}
                      onChange={(e) => handleItemChange(index, e)}
                      className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, e)}
                      className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      name="total"
                      value={item.total}
                      readOnly
                      className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add New Row Button */}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleAddRow}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New Row
            </button>
          </div>

          {/* Final Total Display */}
          <div className="mt-4 font-bold text-right">
            Final Total: ₹ {calculateFinalTotal()}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Create Invoice
          </button>
        </form>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default CreateInvoice;
