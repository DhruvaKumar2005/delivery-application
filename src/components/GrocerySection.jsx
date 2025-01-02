import React from 'react';
import { ChevronRight } from 'lucide-react';
import GroceryCard from './GroceryCard';

const GrocerySections = () => {
  const [cartItems, setCartItems] = React.useState({
    Apples: 1,
    Oranges: 1
  });

  const updateQuantity = (item, increment) => {
    setCartItems(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + increment)
    }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Browse Stores Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Browse Stores</h2>
          <div className="flex items-center text-emerald-600">
            <span className="text-sm">See more</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
        <div className="flex py-2 px-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-max flex-shrink-0">
              <GroceryCard />
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Previously Ordered Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Previously ordered</h2>
          <div className="flex items-center text-emerald-600">
            <span className="text-sm">See more</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
        <div className="flex py-2 px-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-max flex-shrink-0">
              <GroceryCard />
            </div>
          ))}
        </div>
        </div>
        
      </div>

      {/* Cart Section */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        <div className="space-y-3">
          {Object.entries(cartItems).map(([item, quantity]) => (
            <div key={item} className="flex items-center justify-between bg-white rounded-lg p-3">
              <span className="font-medium">{item}</span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">Rs 100/kg</span>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => updateQuantity(item, -1)}
                    className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item, 1)}
                    className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg mt-6 font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default GrocerySections;