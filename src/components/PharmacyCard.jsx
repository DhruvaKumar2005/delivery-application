import React from "react";
import { Star } from "lucide-react";

const PharmacyCard = () => {
  return (
    <div className="mx-4 p-4 rounded-xl bg-white shadow-md border border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Trs Pharmacy</h3>
          <p className="text-sm text-gray-500">Estimated time: 15 minutes</p>
        </div>
        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
          <span className="text-sm font-medium text-green-700">4.3</span>
          <Star size={16} className="fill-green-500 text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default PharmacyCard;
