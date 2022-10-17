import React, { useState, useEffect } from "react";
import axios from "axios";
function App1() {
    const [data,setData]=useState('')
    // const [dataApiOne, setDataApiOne] = useState([])
    // const [dataApiTwo, setDataApiTwo] = useState([])
    // const fetchData = (...allApiData) => {
    //     const apiFirst = "https://dummyjson.com/products"
    //     const apiSecond = "https://dummyjson.com/products"

    //     const apiFirstTitle = axios.get(apiFirst)
    //     const apiSecondImg = axios.get(apiSecond)

    //     axios.all([apiFirstTitle, apiSecondImg]).then(
    //         axios.spread((...allApiData) => {
    //             const allDataFirstApi = allApiData[0].data.products
    //             const allDataSecondApi = allApiData[1].data.products


    //             console.log("firstApi", allDataFirstApi)
    //             console.log("secondApi", allDataSecondApi)
    //             setDataApiTwo(allDataSecondApi)
    //             setDataApiOne(allDataFirstApi)
    //         })
    //     )
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    const handleBlur=(e)=>{
        setData(e.target.value)
    }
    console.log("==>",data);
    return (
        <>
            {/* <div>
                {dataApiOne.map((item, index) => {
                    return (
                        <div>
                            <h1> first api title : {item.title}</h1>
                        </div>
                    )
                })}

            </div>
            <div>
                {
                    dataApiTwo.map((item, index) => {
                        return (
                            <div>
                                <h1>second api price : {item.price}</h1>

                            </div>
                        )
                    })
                }
            </div> */}
            <h1>hello</h1>
            <input onBlur={(e)=>handleBlur(e)}  type="text" />
        </>
    )
}
export default App1;