import React from 'react'
import FoodCard from './FoodCard'
import { MoveRight } from 'lucide-react';

const Cuisines = ({cuisine}) => {
  return (
    <div>
        <div className='flex justify-between mx-8'>
            <h1 className='text-xl font-medium'>{cuisine}</h1>
            <p className='flex items-center gap-1 text-sm'>See more <MoveRight size={16}/></p>    
        </div>
        <div className='ml-2 overflow-x-auto whitespace-nowrap flex py-4'>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
        </div>
    </div>
    
  )
}

export default Cuisines