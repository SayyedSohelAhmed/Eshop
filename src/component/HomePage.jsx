import axios from "axios"
import react, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { BASE_URL } from "../Api/ApiProducts"
import { manipulateCart } from "../redux/cart/cart-action"
import { FILTER_CATEGORY, handleSearch as searchConstant } from "../redux/cart/cart-constant"
import { Button, Rating } from "@mui/material";
import "./HomePage.css"
import Carousel from "./Carousel"
import NavImage from "../component/NavImage"

// this is home page //

const HomePage = () => {
    const searchItem = useSelector((state) => state.searchItem)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    console.log("===>", filter)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)

    const fetchApi = () => {

        // here we use promises .then()  //
        axios.get(BASE_URL).then((res) => {
            console.log('RES : ', res)
            setData(res.data.products)
            dispatch(manipulateCart(searchConstant, res.data.products))
        })
            .catch((err) => {
                console.log("error please enternet connection issue")
            })
    }
    useEffect(() => {
        fetchApi();
    }, [])
    const navigate = useNavigate()

    const goToDetailCard = (item) => {
        navigate("/cardDetail", { state: item })
    }



    const filterItem = (category) => {
        let tempArr = data.filter(
            (item) => {
                return (item.category === category)
            })
        console.log("ye temArr hai", tempArr)
        setFilter(tempArr)
    }

    useEffect(() => {
        setFilter(searchItem)
    }, [searchItem])


    return (
        <>
            <div>
                <h1>home page</h1>
                {/* this is carosel */}
                {/* <NavImage /> */}
                <Carousel />

            </div>
            <div>

                <Button onClick={() => setFilter(data)} >All Products </Button>
                <Button onClick={() => filterItem("smartphones")} >Smart phones</Button>
                <Button onClick={() => filterItem("laptops")}>Laptop </Button>
                <Button onClick={() => filterItem("fragrances")} >fragrances</Button>
                <Button onClick={() => filterItem("skincare")} >skincare</Button>
                <Button onClick={() => filterItem("groceries")} >groceries</Button>
                <Button onClick={() => filterItem("home-decoration")} >home-decoration</Button>
                <Button onClick={() => filterItem("furniture")} >furniture</Button>
                <Button onClick={() => filterItem("Professional Wear")} >Professional Wear</Button>

            </div>


            <div className="main_containerOfCards" >
                {filter?.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="main_container" >
                                <div className="card_container" onClick={() => goToDetailCard(item)} >
                                    <div className="img_container">
                                        <img className="card_img" src={item.thumbnail} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="heading">{item.title}</h2>
                                        <p>{`$ ${item.price}`} <Rating
                                            name="size-small"
                                            value={value}
                                            max={1}
                                            sx={{ fontSize: "14px", color: "#FFFFFF" }}

                                        /> {item.rating} </p>
                                    </div>
                                    <div className="card_description" >
                                        <p> {item.description} </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default HomePage;