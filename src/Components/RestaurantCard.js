// import React from 'react'
// import { IMG_URL } from '../config'
// const RestaurantCard = ({info}) => {
//     const {name,cloudinaryImageId,avgRating,locality,
//         cuisines
//         }=info
//     const{slaString}=info.sla
//   return (
//     <div className='restaurant-card'>
//       <img src={IMG_URL+cloudinaryImageId}></img>
//       <h5>{name}</h5>
//       <h6>{cuisines.join(' ,')}</h6>
//       <h6>{locality}</h6>
//       <h6>{avgRating}</h6>
//       <h6>{slaString}</h6>
//       </div> 
//   )
// }

// export default RestaurantCard

import React from 'react'
import { IMG_URL } from '../config'

const RestaurantCard = ({ info }) => {
  const { name, cloudinaryImageId, avgRating, locality, cuisines } = info
  const { slaString } = info.sla

  return (
    <div className="restaurant-card bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-full">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h5 className="text-xl font-semibold mb-2">{name}</h5>
      <h6 className="text-sm text-gray-600 mb-1">{cuisines.join(' , ')}</h6>
      <h6 className="text-sm text-gray-500 mb-1">{locality}</h6>
      <h6 className="text-sm text-yellow-500 mb-1">{avgRating}</h6>
      <h6 className="text-sm text-gray-500">{slaString}</h6>
    </div>
  )
}

export default RestaurantCard
