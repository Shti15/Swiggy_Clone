import Carousel from "./Carousel"
import TopRestaurantChains from "./TopRestaurantChains"
import useFetchData from "../utils/useFetchData"
import Restaurants from "./Restaurants"
const Body=()=>{
    const data=useFetchData()
    const carouselData=data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    const topRestaurantsData=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const restaurants=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    if (!data) {
        return <h2>Loading...</h2>;
    }
    return(
        <> 
        {/* {
            console.group(carouselData)
        }
            {carouselData ? (
                <Carousel caraouseldata={carouselData} />
            ) : (
                <h2>No data available.</h2> // Message if no data
            )} */}
            {/* {console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)} */}
            {/* {
                
                topRestaurantsData?(<TopRestaurantChains topRestaurantsData={topRestaurantsData} />):(
                    <h2>No data available.</h2> // Message if no data
                )
            }
            {console.log(restaurants)}
            {
                
                restaurants?(<Restaurants RestaurantsData={restaurants} />):(
                    <h2>No data available.</h2> // Message if no data
                )
            } */}
            {console.log(restaurants)}
            <> 
            {carouselData && <Carousel caraouseldata={carouselData} />}
            {topRestaurantsData && <TopRestaurantChains topRestaurantsData={topRestaurantsData} />}
            {restaurants && <Restaurants RestaurantsData={restaurants} />}
        </>
           
        </>
    )
}
export default Body