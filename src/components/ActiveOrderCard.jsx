import React from 'react'
import bar from '../assets/bar.svg'

const ActiveOrderCard = () => {
  return (
    <div className='px-6 py-3 mx-2 mt-3 flex flex-col gap-4 rounded-lg shadow-md'>
        <div className='flex justify-between '>
            <p className='text-xl'>Order #1224</p>
            <p>Food Delivery</p>
        </div>
        <p className=''>Estimated Arrival: 15 min</p>
        <img src={bar} alt="bar" className='mb-2'/>
    </div>
  )
}

export default ActiveOrderCard