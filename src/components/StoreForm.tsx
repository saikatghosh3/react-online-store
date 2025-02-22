
import React, { useState } from 'react';
import { Store } from '../types';
import { checkDomainAvailability, createStore } from '../api';
import toast from 'react-hot-toast';
import { Store as StoreIcon, Globe, MapPin, Battery as Category, Coins, Mail } from 'lucide-react';

const StoreForm = () => {
  const [formData, setFormData] = useState<Store>({
    name: '',
    currency: 'BDT',
    country: 'Bangladesh',
    domain: '',
    category: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    domain: '',
    email: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      domain: '',
      email: ''
    };

    // Validate store name
    if (formData.name.length < 3) {
      newErrors.name = 'Store name must be at least 3 characters long';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format!';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Check domain availability
      const isAvailable = await checkDomainAvailability(`${formData.domain}.expressitbd.com`);
      
      if (isAvailable) {
        try {
          const response = await createStore({
            ...formData,
            domain: formData.domain.toLowerCase() // Ensure domain is lowercase
          });
          toast.success('Store created successfully!');
          // Reset form after successful creation
          setFormData({
            name: '',
            currency: 'BDT',
            country: 'Bangladesh',
            domain: '',
            category: '',
            email: ''
          });
        } catch (error) {
          toast.error('Failed to create store');
        }
      } else {
        setErrors(prev => ({
          ...prev,
          domain: 'Domain is not available. Please try a different domain name.'
        }));
      }
    } catch (error) {
      toast.error('Failed to check domain availability');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-gray-900">Create a store</h2>
          <p className="mt-2 text-sm text-gray-600">
            Add your basic store information and complete the setup
          </p>
          <div className="mt-4 border-b border-gray-200"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
            {/* Left Column - Description */}
            <div className="relative">
              <div className="space-y-8 sticky top-0">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <StoreIcon className="h-5 w-5 text-gray-400 mr-2 hover:fill-blue-500" />
                    Store Name
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    A great store name is a big part of your success. Make sure it aligns with your brand and products.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-2"  />
                    Domain Name
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    A SEO-friendly store name is a crucial part of your success. Make sure it aligns with your brand and products.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    Store Location
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Set your store's default location so we can optimize store access and speed for your customers.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <Category className="h-5 w-5 text-gray-400 mr-2" />
                    Store Category
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Set your store's default category so that we can optimize store access and speed for your customers.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <Coins className="h-5 w-5 text-gray-400 mr-2" />
                    Store Currency
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This is the main currency you wish to sell in.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    Contact Email
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This is the email you'll use to send notifications to and receive orders from customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Store Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Give your online store a name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="How'd you like to call your store?"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Domain */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your online store subdomain
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value.toLowerCase() })}
                      placeholder="enter your domain name"
                      className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-r-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.domain ? 'border-red-300' : 'border-gray-300'
                      }`}
                      required
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      expressitbd.com
                    </span>
                  </div>
                  {errors.domain && (
                    <p className="mt-1 text-sm text-red-500">{errors.domain}</p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Where's your store located?
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    What's your Category?
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home">Home</option>
                    <option value="Beauty">Beauty</option>
                  </select>
                </div>

                {/* Currency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Choose store currency
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="BDT">BDT (Taka)</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Store contact email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                

<button
  type="submit"
  className="w-1/2 ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
  Create store
</button>


                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreForm;