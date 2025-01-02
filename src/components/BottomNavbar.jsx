import React from "react";
import { House, Search, NotepadText, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg rounded-t-3xl">
      <div className="flex justify-around items-center py-4 px-6">
        {[
          { Icon: House, label: "Home", active: true, link:"/" },
          { Icon: Search, label: "Search", link:'/food'},
          { Icon: NotepadText, label: "Orders", link:'/meds' },
          { Icon: Bell, label: "Notifications",link:'/parcel' },
        ].map(({ Icon, label, active, link }) => (
          <Link to={link}>
            <button
            key={label}
            className={`flex flex-col items-center gap-1 ${
              active ? "text-[#FF4B3E]" : "text-gray-400"
            }`}
          >
            <Icon size={24} />
            <span className="text-xs">{label}</span>
          </button>
          </Link>
          
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
