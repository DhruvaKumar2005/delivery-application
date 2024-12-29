import React from 'react'
import Navbar from '../components/Navbar'
import CategoryCards from '../components/CategoryCards'
import food from '../assets/food.svg'
import grocery from '../assets/grocery.svg'
import medicine from '../assets/medicine.svg'
import parcel from '../assets/parcel.svg'
import ActiveOrderCard from '../components/ActiveOrderCard'
import FoodCard from '../components/FoodCard'
import BottomNavbar from '../components/BottomNavbar'

const Home = () => {
    const categories = [food, grocery, medicine, parcel]
  return (
    <div className='mb-24'>
        <Navbar />
        <br />
        <div className='grid grid-cols-2'>
            {categories.map((cat, index) => (
                <CategoryCards key={index} category={cat} />
            ))}
        </div>
        <br />
        <div>
          <h1 className='text-2xl font-medium ml-8'>Active Orders</h1>
          <ActiveOrderCard />
        </div>
        <br />
        <div>
          <h1 className='text-xl font-medium ml-8'>Recommended for you</h1>
          <div className='ml-2 overflow-x-auto whitespace-nowrap flex py-4'>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
            <div className='w-60 flex-shrink-0'><FoodCard /></div>
          </div>
        </div>
        <BottomNavbar />
    </div>
  )
}

export default Home
