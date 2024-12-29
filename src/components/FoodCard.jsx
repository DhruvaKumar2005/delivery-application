import React from 'react'
import food1 from '../assets/food1.svg'

const FoodCard = () => {
  return (
    <div className='w-max rounded-lg shadow-md'>
        <img src={food1} alt="recommendation food" className='w-52'/>
        <div className='flex justify-center py-3'>
            <p className='text-lg'>Charcoal Foods</p>
        </div>
        
    </div>
  )
}

export default FoodCard