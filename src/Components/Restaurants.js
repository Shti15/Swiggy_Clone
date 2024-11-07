// import React, { useState,useEffect } from 'react'
// import RestaurantCard from './RestaurantCard'
// import { Link } from 'react-router-dom'

// const Restaurants = ({RestaurantsData}) => {
//     const [searchText, setSearchText] = useState('');
//     const [restaurantData, setRestaurantData] = useState([]);
//     const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//     // Using useEffect to set restaurant data when RestaurantsData prop changes
//     useEffect(() => {
//         setRestaurantData(RestaurantsData);
//         setFilteredRestaurant(RestaurantsData);
//     }, [RestaurantsData]);

//     // Filtering function
//     function filterRestaurant(searchText, restaurantList) {
//         const filteredRestaurants = restaurantList.filter((item) =>
//             item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
//         );
//         return filteredRestaurants;
//     }

//   return (
//     <>
//         <h3>Restaurants with online food delivery in Nashik</h3>
//         <div className='search-container'>
//         <input type='text' 
//                 placeholder='search restaurant' 
//                 value={searchText} 
//                 onChange={(e)=>{
//                     setSearchText(e.target.value)
//                 }
//                 }/>
//         <button onClick={()=>{
//             const filterdata=filterRestaurant(searchText,restaurantData)
//             setFilteredRestaurant(filterdata)
//         }}>search</button>
//         </div>
//         <div className='top-restaurants'>
        
//             {
               
//                filteredRestaurant.map((items)=>(
                    
//                     <Link to={items?.info?.id? `/restaurant/${items.info.id}`:'#'}>
//                     <RestaurantCard  key={items.info.id}{...items}/>
//                     </Link>
                   
//                 ))
                
//             }
//         </div>
//         </>
//   )
// }


// export default Restaurants
import React, { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const Restaurants = ({ RestaurantsData }) => {
  const [searchText, setSearchText] = useState('')
  const [restaurantData, setRestaurantData] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  // Using useEffect to set restaurant data when RestaurantsData prop changes
  useEffect(() => {
    setRestaurantData(RestaurantsData)
    setFilteredRestaurant(RestaurantsData)
  }, [RestaurantsData])

  // Filtering function
  function filterRestaurant(searchText, restaurantList) {
    const filteredRestaurants = restaurantList.filter((item) =>
      item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filteredRestaurants
  }

  return (
    <>
      <h3 className="text-2xl font-semibold ml-4 my-6">
        Restaurants with online food delivery in Nashik
      </h3>
      
      <div className="flex ml-4 mb-6">
        <input
          type="text"
          placeholder="Search restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-l-md p-2 w-1/3 text-lg"
        />
        <button
          onClick={() => {
            const filterData = filterRestaurant(searchText, restaurantData)
            setFilteredRestaurant(filterData)
          }}
          className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 ml-4"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredRestaurant.map((items) => (
          <Link to={items?.info?.id ? `/restaurant/${items.info.id}` : '#'} key={items.info.id}>
            <RestaurantCard {...items} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Restaurants
