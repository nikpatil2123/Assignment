import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-[28px] leading-[1.2] font-bold text-[#1D2939] mb-2">
          Signin to your<br />PopX account
        </h1>
        <p className="text-[#475467] text-[16px] leading-[1.5] mb-8">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full h-[46px] bg-[#6C25FF] text-white rounded-[8px] text-[16px] font-medium mt-8 hover:bg-[#5A1FD9] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;