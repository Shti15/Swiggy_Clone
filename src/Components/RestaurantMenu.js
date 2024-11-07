// import { useParams } from "react-router-dom"
// import useFetchMenu from "../utils/useFetchMenu"
// import useFetchMenu from "../utils/useFetchMenu"
// import { IMG_URL } from "../config"
// import { useDispatch } from "react-redux"
// import { addItems } from "../utils/cartSlice"
// const RestaurantMenu=()=>{
//     const {id}=useParams()
//     const data=useFetchMenu(id)
//     const restaurantdata=data?.data?.cards[2]?.card?.card?.info
//     const restaurantMenu=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
//     const dispatch=useDispatch()
//     function handelAddItems(item){
//             dispatch(addItems(item))
//     }
//     return(
//         <div className="restaurant-details">
//         {/* {console.log(data.data.cards[2].card.card.info.name)} */}
//            <img src={IMG_URL+restaurantdata?.cloudinaryImageId}/>
//             <h1>{restaurantdata?.name}</h1>
//             <h6>{restaurantdata?.avgRating}</h6>
//             <h6>{restaurantdata?.areaName}</h6>
//             <h6>{restaurantdata?.costForTwoMessage}</h6>
//             <h6>{restaurantdata?.cuisines.join(' ,')}</h6>
           
//            <div className="restaurant-menu">
//             <h5>Menu</h5>
//             <ul>

//             {
//                 restaurantMenu?(Object.values(restaurantMenu).map((item)=>(
//                     <li key={item?.card?.info.id} >
//                         <h5>{item?.card?.info.name}</h5>
//                         <h6>Rs.{item?.card?.info.price/100}</h6>
//                         <p>{item?.card?.info.description}</p>
//                         <button onClick={()=>{
//                             handelAddItems(item)
//                         }}>Add</button>
//                     </li>
//                 ))):(
//                     <h6>Loading menu...</h6>
//                 )
                
//             }
//             </ul>

//            </div>
//            </div>
//     )
// }
// export default RestaurantMenu


import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import { IMG_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const data = useFetchMenu(id);
  const restaurantData = data?.data?.cards[2]?.card?.card?.info;
  const restaurantMenu = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const dispatch = useDispatch();

  function handleAddItems(item) {
    dispatch(addItems(item));
  }

  return (
    <div className="p-6">
      {/* Restaurant Details */}
      <div className="mb-8">
        <img src={IMG_URL + restaurantData?.cloudinaryImageId} alt={restaurantData?.name} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-semibold mt-4">{restaurantData?.name}</h1>
        <h6 className="text-lg text-gray-600">{restaurantData?.avgRating} ⭐</h6>
        <h6 className="text-lg text-gray-600">{restaurantData?.areaName}</h6>
        <h6 className="text-lg text-gray-600">{restaurantData?.costForTwoMessage}</h6>
        <h6 className="text-lg text-gray-600">{restaurantData?.cuisines.join(' ,')}</h6>
      </div>

      {/* Menu Section */}
      <div className="restaurant-menu">
        <h5 className="text-2xl font-semibold mb-4">Menu</h5>
        <ul className="space-y-6">
          {restaurantMenu ? (
            Object.values(restaurantMenu).map((item) => (
              <li key={item?.card?.info.id} className="flex items-start space-x-4 p-4 border-b border-gray-300">
                <div className="flex flex-col flex-grow">
                  <h5 className="text-xl font-semibold">{item?.card?.info.name}</h5>
                  <h6 className="text-lg text-gray-700">Rs. {item?.card?.info.price / 100}</h6>
                  <p className="text-sm text-gray-500 mt-2">{item?.card?.info.description}</p>
                </div>
                <button
                  onClick={() => handleAddItems(item)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                >
                  Add
                </button>
              </li>
            ))
          ) : (
            <h6 className="text-lg text-gray-600">Loading menu...</h6>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
