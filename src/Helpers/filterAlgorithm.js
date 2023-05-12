
const filterData = (searchText,restaurants,dispatch,setFilteredRestaurants) => {
    const filteredData = restaurants.filter((item) => {
      return item.data.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    })
    dispatch(setFilteredRestaurants(filteredData))
  }
  export default filterData

  export function filterUsers(searchText,users) {
    const regex = new RegExp(`^${searchText}`, 'i');
    const filteredUsers = users.filter(user => {
      return regex.test(user.name) || regex.test(user.email);
    });
  
    return filteredUsers;
  }
  
