import React from 'react'
import { Star } from 'lucide-react';

const RecommendationCard = () => {
  return (
    <div className='px-3 py-5 mx-2 rounded-xl shadow-lg'>
        <div className='flex justify-between'>
            <p className='text-xl font-medium'>Trs Bakery</p>
            <p className='flex gap-1 items-center'>Rating: 4.3<Star fill='green' stroke='green'/></p>  
        </div>
        <p>Estimated time: 15 minutes</p>
    </div>
  )
}

export default RecommendationCard