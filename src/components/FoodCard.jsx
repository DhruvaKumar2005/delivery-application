import React from "react";
import food1 from "../assets/food1.svg";

const FoodCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md flex-shrink-0 w-64 overflow-hidden">
      <div className="relative">
        <img src={food1} alt="Food" className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#FF4B3E]">
          ₹450
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">Charcoal Foods</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center text-[#FF9F1C]">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>★</span>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">(128)</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
