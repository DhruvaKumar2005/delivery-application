import React from "react";
import FoodCard from "./FoodCard";
import { MoveRight } from "lucide-react";

const Cuisines = ({ cuisine }) => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center px-4 mb-3">
        <h2 className="text-xl font-semibold text-gray-800">{cuisine}</h2>
        <button className="flex items-center gap-1 text-sm text-orange-500">
          See more <MoveRight size={16} />
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex py-2 px-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-max flex-shrink-0">
              <FoodCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisines;
