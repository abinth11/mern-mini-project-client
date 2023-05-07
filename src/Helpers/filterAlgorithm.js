const filterData = (searchText,data,setData,allData) => {
    const filteredData = allData.filter((item) => {
      return item.data.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    })
    setData(filteredData)
  }
  export default filterData

