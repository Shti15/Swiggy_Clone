import React from 'react';

const Offers = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Exclusive Offers</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Discover amazing offers and discounts only on Swiggy. Hurry, grab them before they're gone!
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white py-2 px-8 rounded-full hover:bg-orange-600 transition duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
