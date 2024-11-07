import React, { useEffect, useState } from 'react'
import { MAIN_URL } from '../config'

const useFetchData = () => {
  const [restaurantsData,setRestaurantData]=useState({})

  useEffect(()=>{
    getApi()
  },[])

  async function getApi(){
        const data=await fetch(MAIN_URL)
        const formatedData=await data.json()
        setRestaurantData(formatedData)
        console.log(formatedData)
  }
  return restaurantsData
}

export default useFetchData