import React from 'react';
import { Camera } from 'lucide-react';

function AccountSettings() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-4 border-b border-[#E5E7EB]">
        <h1 className="text-[22px] font-medium text-[#1D2939]">Account Settings</h1>
      </div>
      
      <div className="bg-[#F7F8F9] p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#6C25FF] rounded-full p-1.5 shadow-sm">
              <Camera size={16} className="text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="font-medium text-[18px] text-[#1D2939]">Marry Doe</h2>
            <p className="text-[14px] text-[#475467]">Marry@Gmail.Com</p>
          </div>
        </div>
        
        <p className="mt-6 text-[14px] text-[#475467] leading-[1.6]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default AccountSettings;