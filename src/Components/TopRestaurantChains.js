// import react from 'react'
// import RestaurantCard from './RestaurantCard'
// import { Link } from 'react-router-dom'
// const TopRestaurantChains=({topRestaurantsData})=>{
//     return(
//         <>
//         <h3>Top restaurant chains in Nashik</h3>
//         <div className='top-restaurants'>
            
//             {
//                 topRestaurantsData.map((items)=>(
//                     <Link to={items?.info?.id? `/restaurant/${items.info.id}`:'#'}>
//                     <RestaurantCard key={items.info.id} {...items}/>
//                     </Link>
//                 ))
//             }
//         </div>
//         </>
//     )
// }
// export default TopRestaurantChains

import React from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const TopRestaurantChains = ({ topRestaurantsData }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold ml-4 mb-6">Top restaurant chains in Nashik</h3>
      <div className="flex space-x-6 overflow-x-auto py-6 scrollbar-hidden w-full">
        {
          topRestaurantsData.map((item) => (
            <Link to={item?.info?.id ? `/restaurant/${item.info.id}` : '#'} key={item.info.id}>
              <RestaurantCard {...item} />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default TopRestaurantChains

