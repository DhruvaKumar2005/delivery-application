import React from 'react'
import { CircleUserRound } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-between py-6 px-8 items-center bg-slate-100 rounded-b-xl'>
        <h1 className='text-2xl'>Welcome back</h1>
        <CircleUserRound size={30} />
    </div>
  )
}

export default Navbar