// import React from 'react'
// import FoodItem from './FoodItem'
// import { useDispatch, useSelector } from 'react-redux'
// import { clearCart } from '../utils/cartSlice'

// const Cart = () => {
//   const cardItems=useSelector(store=>store.cart.items)
//   const dispatch=useDispatch()
//   function handelClearCart(){
//      dispatch(clearCart())
//   }
//   return (
//     <>
//     <div>Cart</div>
//     <button onClick={()=>(
//       handelClearCart()
//     )}>Clear Cart</button>
//     <div className='cart-whole'>
      
//       {
//         cardItems.length ? (
//           cardItems.map((item, index) => (
//             <FoodItem key={index} item={item} />
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )
//       }
//     </div>
//     </>
//   )
// }

// export default Cart

import React from 'react';
import FoodItem from './FoodItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>

      {/* Clear Cart Button */}
      <button
        onClick={handleClearCart}
        className="mb-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        Clear Cart
      </button>

      {/* Cart Items */}
      <div className="cart-whole space-y-6">
        {cardItems.length ? (
          cardItems.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))
        ) : (
          <p className="text-lg text-gray-600">No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
