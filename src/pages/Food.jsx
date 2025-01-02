import React from 'react'
import Header from '../components/Header'
import Cuisines from '../components/Cuisines'
import RecommendSection from '../components/RecommendSection'
import BottomNavbar from '../components/BottomNavbar'

const Food = () => {
    const cuisineslist=['Indian Cuisine','Chinese Cuisine']
  return (
    <div className='mb-24'>
        <Header name={"Food Delivery"}/>
        <br />
        <div>
        {cuisineslist.map((cuisine, index) => (
            <>
                <Cuisines key={index} cuisine={cuisine} />
                <br />
                <hr />
                <br />
            </>
            ))} 
        </div>
        <RecommendSection />
        <BottomNavbar /> 
    </div>
  )
}

export default Food