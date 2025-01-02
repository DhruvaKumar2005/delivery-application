import React from 'react'

const CategoryCards = ({ icon, label, color }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className="aspect-square relative mb-3">
        <img src={icon} alt={label} className="w-full h-full object-contain" />
      </div>
      <p className="text-center font-medium text-gray-800">{label}</p>
    </div>
  )
}

export default CategoryCards