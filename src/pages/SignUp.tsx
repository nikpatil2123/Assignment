import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-[28px] leading-[1.2] font-bold text-[#1D2939] mb-8">
          Create your<br />PopX account
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter full name"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            <label>Full Name<span className="required">*</span></label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Enter phone number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <label>Phone number<span className="required">*</span></label>
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Enter email address"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <label>Email address<span className="required">*</span></label>
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <label>Password<span className="required">*</span></label>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
            <label>Company name</label>
          </div>

          <div className="pt-2">
            <p className="block text-[#1D2939] text-[14px] mb-3">
              Are you an Agency?<span className="text-[#FF0000]">*</span>
            </p>
            <div className="flex gap-8">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency}
                  onChange={() => setFormData({...formData, isAgency: true})}
                  className="mr-2"
                />
                <span className="text-[#1D2939] text-[16px]">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={!formData.isAgency}
                  onChange={() => setFormData({...formData, isAgency: false})}
                  className="mr-2"
                />
                <span className="text-[#1D2939] text-[16px]">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[46px] bg-[#6C25FF] text-white rounded-[8px] text-[16px] font-medium mt-8 hover:bg-[#5A1FD9] transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;