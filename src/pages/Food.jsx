import React from 'react'
import Header from '../components/Header'
import Cuisines from '../components/Cuisines'
import RecommendSection from '../components/RecommendSection'

const Food = () => {
    const cuisineslist=['Indian Cuisine','Chinese Cuisine']
  return (
    <div>
        <Header />
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
    </div>
  )
}

export default Food