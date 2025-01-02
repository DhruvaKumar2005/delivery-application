import React from "react";
import { ArrowLeft, CircleUserRound } from "lucide-react";

const Header = ({name}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#FF4B3E] to-[#FF6B5D]">
      <ArrowLeft className="text-white" size={24} />
      <p className="text-lg font-medium text-white">{name}</p>
      <CircleUserRound className="text-white" size={24} />
    </div>
  );
};

export default Header;
