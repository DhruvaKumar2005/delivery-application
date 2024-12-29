import React from 'react'
import { MoveRight } from 'lucide-react';
import RecommendationCard from './RecommendationCard';
import BottomNavbar from './BottomNavbar';

const RecommendSection = () => {
  return (
    <div>
        <div className='flex justify-between mx-8 mb-4'>
            <h1 className='text-xl font-medium'>Recommended for you</h1>
            <p className='flex items-center gap-1 text-sm'>See more <MoveRight size={16}/></p>    
        </div>
        <div className='flex flex-col gap-5'>
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
        </div>
        
    </div>
  )
}

export default RecommendSection