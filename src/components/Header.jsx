import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';


const Header = () => {
  return (
    <div className='flex justify-between py-6 px-8 items-center bg-slate-100 rounded-b-xl'>
        <ArrowLeft size={30}/>
        <p className='text-xl '>Food Delivery</p>
        <CircleUserRound size={30}/>
    </div>
  )
}

export default Header