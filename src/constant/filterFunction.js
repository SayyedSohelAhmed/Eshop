const filterItem = (category,setFilter,data) => {
    let tempArr = data.filter(
        (item) => {
            return (item.category === category)
        })
    console.log("ye temArr hai", tempArr)
    setFilter(tempArr)
}
export default filterItem;