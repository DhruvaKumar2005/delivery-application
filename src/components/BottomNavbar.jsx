import React from "react";
import { House, Search, NotepadText, Bell } from "lucide-react";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg rounded-t-3xl">
      <div className="flex justify-around items-center py-4 px-6">
        {[
          { Icon: House, label: "Home", active: true },
          { Icon: Search, label: "Search" },
          { Icon: NotepadText, label: "Orders" },
          { Icon: Bell, label: "Notifications" },
        ].map(({ Icon, label, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-1 ${
              active ? "text-[#FF4B3E]" : "text-gray-400"
            }`}
          >
            <Icon size={24} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
