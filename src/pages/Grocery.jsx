import React from 'react'
import Header from '../components/Header'
import GrocerySections from '../components/GrocerySection'
import BottomNavbar from '../components/BottomNavbar'

const Grocery = () => {
  return (
    <div className="min-h-screen mb-24">
        <Header name={"Grocery Delivery"}/>
        <GrocerySections />
        <BottomNavbar />
    </div>
  )
}

export default Grocery