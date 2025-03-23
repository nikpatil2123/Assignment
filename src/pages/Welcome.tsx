import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-white px-6 flex items-end">
			<div className="max-w-md mx-auto pb-12 w-full">
				<h1 className="text-[32px] leading-[1.2] font-bold text-[#1D2939] mb-2">Welcome to PopX</h1>
				<p className="text-[#475467] text-[16px] leading-[1.5] mb-8">
					Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
				</p>

				<button
					onClick={() => navigate('/signup')}
					className="w-full h-[46px] bg-[#6C25FF] text-white rounded-[8px] text-[16px] font-medium mb-4 hover:bg-[#5A1FD9] transition-colors"
				>
					Create Account
				</button>

				<button
					onClick={() => navigate('/signin')}
					className="w-full h-[46px] bg-[#F3E8FF] text-[#6C25FF] rounded-[8px] text-[16px] font-medium hover:bg-[#EBD9FF] transition-colors"
				>
					Already Registered? Login
				</button>
			</div>
		</div>
	);
}

export default Welcome;