import React from "react";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-[#FF4B3E] to-[#FF6B5D] px-4 py-5 rounded-b-3xl shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm">Welcome back</p>
          <h1 className="text-2xl font-bold text-white">Dhruva Kumar</h1>
        </div>
        <div className="bg-white p-2 rounded-full shadow-md">
          <CircleUserRound size={30} className="text-[#FF4B3E]" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
