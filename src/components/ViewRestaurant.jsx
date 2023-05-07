import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import RestaurantMenu from "./RestaurantMenu";
const ViewRestaurant = () => {
    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)
    const [menuTitle,setMenuTitle] = useState('')
    useEffect(() => {
        getRestaurantData()
    }, [])
    const menuItems = menu?.length?menu?.length:0
    const { resId } = useParams()
    const getRestaurantData = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.927532&lng=76.2638427&restaurantId=${resId}&submitAction=ENTER`)
            const restaurantData = await data.json()
            setRestaurant(restaurantData?.data?.cards[0]?.card?.card?.info)
            setMenuTitle(restaurantData?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title)
            setMenu(restaurantData?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="view-restaurant">
            <p className="rest-url">Home / {restaurant?.city} / {restaurant?.areaName} / {restaurant?.name}</p>
            <div className="restaurant-details">
                {/* <img className="main-img" src={`${restaurantImageUrl}/${restaurant?.cloudinaryImageId}`} alt="restaurant" /> */}
                <h2>{restaurant?.name}</h2>
                <p style={{ paddingTop: '0px' }}>{restaurant?.cuisines?.join(', ')}</p>
                <p>{restaurant?.areaName}, {restaurant?.sla?.lastMileTravelString} </p>
                <p>{restaurant?.feeDetails?.message}</p>
                <button className="rating-button">
                    <span className="s-rating"><FaStar style={{ marginRight: '5px' }} />{restaurant?.avgRating}</span>
                    <hr />
                    <span>{restaurant?.totalRatingsString}</span>
                </button>
                <hr className="doted-hr" />

                <div className="restaurant-menu">
                    <h3>{menuTitle}({menuItems})</h3>
                    {
                        menu?.map((item) => {
                            return (
                                <div className="menu-item" key={item?.card?.info?.id}>
                                    <RestaurantMenu menuItem={item?.card?.info} />
                                    <hr className="doted-hr" />
                                </div>)
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default ViewRestaurant