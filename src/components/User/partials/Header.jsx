import React, { useState } from "react";
import { logoImageUrl } from "../../../constants";
import filterData from "../../../Helpers/filterAlgorithm";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredRestaurants } from '../../../features/filteredRestaurants';
import { Link } from "react-router-dom";
import UserProfile from "../Profile/userProfile";
const logo = (
  <div className="logo">
    <img src={logoImageUrl} alt="logo" />
  </div>
);
const Header = () => {
  const [searchText, setSearch] = useState("")
  const dispatch = useDispatch()
  const restaurants = useSelector((state) => state?.restaurantReducer?.restaurants);
  const token = useSelector((state) => state?.authReducer);
  return (
    <div className="header">
      <a href="/"> {logo}</a>
      <ul>
        <li>
          <input type="text"
            placeholder="Search..."
            value={searchText}
            onChange={e => {
              setSearch(e.target.value)
              filterData(searchText, restaurants, dispatch, setFilteredRestaurants)

            }}
          />
        </li>
        <li>
          <Link className="nav-link" to='/offers'>Offers</Link>
        </li>
        <li>
          <Link className="nav-link" to='/help'>Help</Link>
        </li>
        {
          token ?
          <li><UserProfile/></li>
            : <li> 
              <Link className="nav-link" to='/login'>Sign In</Link>
            </li>
        }
        <li>
          <Link className="nav-link" to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;
