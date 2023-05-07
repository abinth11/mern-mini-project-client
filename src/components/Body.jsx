import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import ShimmerEffect from './shimmer';
import { MyContext } from '../App';

const Body = () => {
  const shimmer = new Array(15).fill(0)
  return (
    <MyContext.Consumer>
      {(context) => {
        const { restaurant, isLoading } = context;
        return (
          <div className='body'>
            {
              isLoading
                ? (
                  shimmer?.map((item, index) => <ShimmerEffect key={index} />)
                )
                : (restaurant?.map((restaurant) => {
                  return <Link className='card-link' to={`/view-restaurant/${restaurant.data.id}`} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
                }))
            }
          </div >
        );
      }}
    </MyContext.Consumer>
  );
}
export default Body;
