import React from "react";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import PharmacySection from "../components/PharmacySection";
import UploadSection from "../components/UploadSection";
import TrackOrder from "../components/TrackOrder";

const Medicine = () => {
  return (
    <div className="min-h-screen mb-24">
      <Header name={"Medicine Delivery"} />
      <UploadSection />
      <PharmacySection />
      <TrackOrder />
      <BottomNavbar />
    </div>
  );
};

export default Medicine;
