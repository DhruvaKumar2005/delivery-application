import React from "react";
import { MoveRight } from "lucide-react";
import PharmacyCard from "./PharmacyCard";

const PharmacySection = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center px-4 mb-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Select Pharmacy
        </h2>
        <button className="flex items-center gap-1 text-sm text-orange-500">
          See more <MoveRight size={16} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((item) => (
          <PharmacyCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default PharmacySection;
