import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './Restaurants/RestaurantCard';
import ShimmerEffect from './shimmer';
import { useSelector, useDispatch } from 'react-redux';
import { setRestaurants } from '../features/restaurants';
import {setFilteredRestaurants} from '../features/filteredRestaurants';
const Body = () => {
  useEffect(() => {
    getRestaurants()
  }, [])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const getRestaurants = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.927532&lng=76.2638427&page_type=DESKTOP_WEB_LISTING")
      const parsedJson = await data.json()
      dispatch(setRestaurants(parsedJson?.data?.cards[2]?.data?.data?.cards));
      dispatch(setFilteredRestaurants(parsedJson?.data?.cards[2]?.data?.data?.cards))
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.log(error)
      // alert('something went wrong..')
    }
  }
  const filteredRestaurants = useSelector((state) => state?.filteredRestaurantReducer?.restaurants);
  const shimmer = new Array(15).fill(0)
  return (
    <div className='body'>
      {
        isLoading
          ? (
            shimmer?.map((item, index) => <ShimmerEffect key={index} />)
          )
          : (filteredRestaurants?.map((restaurant) => {
            return <Link className='card-link' to={`/view-restaurant/${restaurant.data.id}`} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
          }))
      }
    </div >
  )
}
export default Body;
