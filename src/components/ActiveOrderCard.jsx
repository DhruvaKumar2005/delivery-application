import React from "react";

const ActiveOrderCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Order #1224</h3>
          <p className="text-sm text-gray-500">Food Delivery</p>
        </div>
        <div className="bg-[#2EC4B6] text-white px-4 py-2 rounded-full text-sm">
          In Progress
        </div>
      </div>
      <p className="text-gray-600 mb-4">Estimated Arrival: 15 min</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-[#2EC4B6] h-2 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
    </div>
  );
};

export default ActiveOrderCard;
