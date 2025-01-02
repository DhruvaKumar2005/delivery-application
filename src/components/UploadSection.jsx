import React from "react";
import { Upload } from "lucide-react";
import { Camera } from "lucide-react";

const UploadSection = () => {
  return (
    <div className="flex flex-col px-4 py-6 m-3 shadow-even rounded-2xl bg-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">
        Upload Prescription
      </h2>
      <div className="flex justify-between mt-2">
        <div className="flex w-max p-3 rounded-xl gap-2 bg-gradient-to-r from-[#FF4B3E] to-[#FF6B5D] text-white shadow-even">
          <Upload />
          <p>Upload a file</p>
        </div>
        <div className="flex w-max p-3 rounded-xl gap-2 bg-gradient-to-r from-[#FF4B3E] to-[#FF6B5D] text-white shadow-even">
          <Camera />
          <p>Take a photo</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-medium mb-2">Notes for Pharmacist</h2>
        <textarea
          className="bg-slate-100 rounded-xl w-full p-2 shadow-md"
          rows={5}
          placeholder="Notes here..."
        ></textarea>
      </div>
      <div className="flex justify-center items-center mt-2">
        <button className="bg-gradient-to-r from-[#FF4B3E] to-[#FF6B5D] text-white w-max py-3 px-4 rounded-2xl shadow-even">
          Submit the Prescription
        </button>
      </div>
    </div>
  );
};

export default UploadSection;
