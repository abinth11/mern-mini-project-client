import React from "react";
import { logoImageUrl } from "../constants";
import filterData from "../Helpers/filterAlgorithm";
import { Link } from "react-router-dom";
const logo = (
  <div className="logo">
    <img src={logoImageUrl} alt="logo" />
  </div>
);
const Header = ({ searchText, setSearchText, restaurant, setRestaurant, allRestaurant, }) => {
  return (
    <div className="header">
      <a href="/"> {logo}</a>
      <ul>
        <li>
          <input type="text"
            placeholder="Search..."
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value)
              filterData(searchText, restaurant, setRestaurant, allRestaurant,)
            }}
          />
        </li>
        <li>
          <Link className="nav-link" to='/offers'>Offers</Link>
        </li>
        <li>
          <Link className="nav-link" to='/help'>Help</Link>
        </li>
        <li>
          <Link className="nav-link" to='/login'>Sign In</Link>
        </li>
        <li>
          <Link className="nav-link" to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;
