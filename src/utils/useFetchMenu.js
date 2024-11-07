import React, { useEffect, useState } from 'react'
import { MENU_URL } from '../config'
const useFetchMenu = (id) => {
    const [restaurantMenu,setRestaurantMenu]=useState({})
    
    useEffect(()=>{
            getData()
        },[])
    async function getData() {
        const data=await fetch(`${MENU_URL}&restaurantId=${id}`)
        const formatedData=await data.json()
        // console.log(formatedData)
        setRestaurantMenu(formatedData)
    }
    return restaurantMenu
}

export default useFetchMenu