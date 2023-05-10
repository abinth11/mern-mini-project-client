import React from "react"
import { menuItemImageUrl } from "../../constants.js"
import { formatMoneyINR } from "../../Helpers/helperFunctions.js";
const RestaurantMenu = ({menuItem}) =>{
    return (
        <>
            <h4>{menuItem?.name}</h4>
            <p>{isNaN(menuItem?.price/100 )?'100':formatMoneyINR(menuItem?.price/100)}</p>
            <p className="description">{menuItem?.description}</p>
            <img className="menu-item-image" src={`${menuItemImageUrl}${menuItem?.imageId}`} alt="" />
            <button className="add-button">ADD</button>
        </>
    )

}
export default RestaurantMenu