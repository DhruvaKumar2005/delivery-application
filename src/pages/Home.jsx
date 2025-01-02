import React from "react";
import Navbar from "../components/Navbar";
import CategoryCards from "../components/CategoryCards";
import ActiveOrderCard from "../components/ActiveOrderCard";
import FoodCard from "../components/FoodCard";
import BottomNavbar from "../components/BottomNavbar";
import food from "../assets/food.svg";
import grocery from "../assets/grocery.svg";
import medicine from "../assets/medicine.svg";
import parcel from "../assets/parcel.svg";

const Home = () => {
  const categories = [
    { icon: food, label: "Food", color: "#FF4B3E" },
    { icon: grocery, label: "Grocery", color: "#2EC4B6" },
    { icon: medicine, label: "Medicine", color: "#FF9F1C" },
    { icon: parcel, label: "Parcel", color: "#011627" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="grid grid-cols-2 gap-4 px-4 mt-6">
        {categories.map((cat, index) => (
          <CategoryCards key={index} {...cat} />
        ))}
      </div>

      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Active Orders</h2>
        <ActiveOrderCard />
      </section>

      <section className="mt-8 px-4 pb-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">For You</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3, 4].map((item) => (
            <FoodCard key={item} />
          ))}
        </div>
      </section>

      <BottomNavbar />
    </div>
  );
};

export default Home;
