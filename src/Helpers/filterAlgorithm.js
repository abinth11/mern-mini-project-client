
const filterData = (searchText,restaurants,dispatch,setFilteredRestaurants) => {
  console.log(searchText)
    const filteredData = restaurants.filter((item) => {
      return item.data.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    })
    dispatch(setFilteredRestaurants(filteredData))
  }
  export default filterData

