import React from "react";
import map from "../assets/map.svg";

const TrackOrder = () => {
  return (
    <div className="py-4">
      <div className="px-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Track Your Order
        </h2>
      </div>
      <img src={map} alt="map" className="w-full" />
    </div>
  );
};

export default TrackOrder;
