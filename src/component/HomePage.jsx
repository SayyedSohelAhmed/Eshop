import axios from "axios"
import react, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { BASE_URL } from "../Api/ApiProducts"
import { manipulateCart } from "../redux/cart/cart-action"
import { handleSearch as searchConstant } from "../redux/cart/cart-constant"
import { Button, Rating, Select, MenuItem } from "@mui/material";
import "./HomePage.css"
import NavImage from "../component/NavImage"
import BannerCarousel from "./BannerCarousel"
import filterItem from "../constant/filterFunction"
import DropVertical from "./DropVertical"

const HomePage = () => {
    const searchItem = useSelector((state) => state.searchItem)
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    console.log("===>", filter)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
    const [course, setCourse] = useState('')

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





    useEffect(() => {
        setFilter(searchItem)
    }, [searchItem])

    const updateValue = (e, item) => {
        console.log(e.target.value)
        setCourse(e.target.value)
    }
    return (
        <>
            <div>
                <h1>home page</h1>
                {/* this is carosel */}
                {/* <NavImage /> */}
                {/* <Carousel /> */}
                <BannerCarousel />
                {/* <DropVertical /> */}
            </div>
            {/* this is section catergories section make by material UI */}
            <div>
                <Select label="Select Course" onChange={(e) => updateValue(e)}
                    value={course} displayEmpty style={{ width: "15%", margin: '1rem' }} fullWidth >
                    <MenuItem value=''> Categories </MenuItem>
                    <MenuItem><Button onClick={() => setFilter(data)} >All Products </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("smartphones", setFilter, data)} >Smart phones</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("laptops", setFilter, data)}>Laptop </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("fragrances", setFilter, data)} >Fragrances</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("skincare", setFilter, data)} >Skincare</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("groceries", setFilter, data)} >Groceries</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("home-decoration", setFilter, data)} >home-decoration</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("furniture", setFilter, data)} >Furniture</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("tops", setFilter, data)} > Tops </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-dresses", setFilter, data)}> Womens-dresses</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-shoes", setFilter, data)}> Womens-shoes</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("mens-shirts", setFilter, data)} > Mens-shirt</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("mens-shoes", setFilter, data)} > Mens-shoes</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("mens-watches", setFilter, data)} > Mens-watches</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-watches", setFilter, data)} > Womens-watches</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-bags", setFilter, data)} > Womens-bags </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-jewellery", setFilter, data)} > Womens-jewellery </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("sunglasses", setFilter, data)} > Sunglasses </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("automotive", setFilter, data)} > Automotive </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("motorcycle", setFilter, data)} > Motorcycle </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("lighting", setFilter, data)} > Lighting </Button></MenuItem>
                </Select>
            </div>

            <div className="main_containerOfCards" >
                {filter?.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="main_container" >
                                
                                <div className="card_container" onClick={() => goToDetailCard(item)} >
                                    <div className="img_container">
                                        <img className="card_img" src={item.thumbnail} alt="" data-aos="fade-up"/>
                                    </div>
                                    <div>
                                        <h3 className="heading">{item.title}</h3>
                                        <div className="rating_price_container">
                                            <h5>{`$ ${item.price}`}</h5>
                                            <p className="discountPercentage">{`${item.discountPercentage}% off`}</p>
                                            <p className="rating" > <Rating
                                                name="size-small"
                                                value={value}
                                                max={1}
                                                sx={{ fontSize: "14px", color: "#FFFFFF" }}
                                            /> {item.rating} </p>
                                        </div>
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