// import React from 'react'
// import { IMG_URL } from '../config';
// import { useDispatch } from 'react-redux';
// import { removeItems } from '../utils/cartSlice';
// const FoodItem = ({ item }) => {
//     console.log("FoodItem received:", item);  // Log the item received in FoodItem
//     const dispatch=useDispatch()
//   function handelRemoveItem(index){
//      dispatch(removeItems(index))
//   }
//     // Ensure the item has the correct structure
//     const { name, price,imageId,id
//          } = item?.card?.info || {}; // Safely destructure

//     return (
//         <div className='cart'>
//                 <img src={IMG_URL+imageId}></img>
//                 <h5>{name}</h5>
//                 <h6>Rs.{price / 100}</h6>
//                 <button onClick={()=>{
//                     handelRemoveItem(id)
//                 }}>Remove item</button>
              
//         </div>
//     );
// }

// export default FoodItem
import React from 'react';
import { IMG_URL } from '../config';
import { useDispatch } from 'react-redux';
import { removeItems } from '../utils/cartSlice';

const FoodItem = ({ item }) => {
  const dispatch = useDispatch();

  function handelRemoveItem(id) {
    dispatch(removeItems(id));
  }

  // Safely destructure the item
  const { name, price, imageId, id } = item?.card?.info || {};

  return (
    <div className="flex items-center space-x-4 p-4 border-b border-gray-300">
      {/* Image */}
      <img
        src={IMG_URL + imageId}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Item details */}
      <div className="flex flex-col flex-grow">
        <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
        <h6 className="text-sm text-gray-500">Rs. {price / 100}</h6>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handelRemoveItem(id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default FoodItem;

