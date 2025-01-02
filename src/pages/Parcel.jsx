import React from 'react'
import Header from '../components/Header.jsx'
import BottomNavbar from '../components/BottomNavbar.jsx'
import { Upload } from "lucide-react";
import { Camera } from "lucide-react";
import TrackOrder from '../components/TrackOrder.jsx';

const Parcel = () => {
  return (
    <div className="min-h-screen mb-24">
        <Header name={"Parcel Delivery"}/>
        <div className="flex flex-col px-4 py-6 m-3 shadow-even rounded-2xl bg-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">
        Upload Prescription
      </h2>
      <div className='flex flex-col gap-2 my-2'>
        <input className='p-2 rounded-lg pl-4 shadow-md' placeholder='Pickup Address'></input>
        <input className='p-2 rounded-lg pl-4 shadow-md' placeholder='Delivery Address'></input>
        <input className='p-2 rounded-lg pl-4 shadow-md' placeholder='Sender Mobile'></input>
        <input className='p-2 rounded-lg pl-4 shadow-md' placeholder='Receiver Mobile'></input>
      </div>
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
        <h2 className="font-medium mb-2">Notes</h2>
        <textarea
          className="bg-slate-100 rounded-xl w-full p-2 shadow-md"
          rows={5}
          placeholder="Additional delivery information"
        ></textarea>
      </div>
      <div className="flex justify-center items-center mt-2">
        <button className="bg-gradient-to-r from-[#FF4B3E] to-[#FF6B5D] text-white w-max py-3 px-4 rounded-2xl shadow-even">
          Ship Parcel
        </button>
      </div>
      
    </div>
    <TrackOrder />
        <BottomNavbar />
    </div>
  )
}

export default Parcel