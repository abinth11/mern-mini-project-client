import React from 'react';
import { restaurantImageUrl } from '../constants';
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
  costForTwoString,
}) => (
  <div className='card'>
    <img src={`${restaurantImageUrl}/${cloudinaryImageId}`} alt='restaurant image' />
    <h2>{name}</h2>
    <h4>{cuisines.join(', ')}</h4>
    <h5>
      <span>{avgRating}</span>
      <span>{sla.deliveryTime}&nbsp;&nbsp;Mins</span>
      <span>{costForTwoString}</span>
    </h5>
  </div>
);
export default RestaurantCard;
