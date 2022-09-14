import axios from "axios"
import react, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { BASE_URL } from "../Api/ApiProducts"
import { manipulateCart } from "../redux/cart/cart-action"
import { FILTER_CATEGORY, handleSearch as searchConstant } from "../redux/cart/cart-constant"
import { Button, Rating, Select, MenuItem } from "@mui/material";
import "./HomePage.css"
import Carousel from "./Carousel"
import NavImage from "../component/NavImage"

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
                <Carousel />

            </div>
            {/* this is section catergories section make by material UI */}
            <div>
                <Select label="Select Course" onChange={(e) => updateValue(e)}
                    value={course} displayEmpty style={{ width: "15%", margin: '1rem' }} fullWidth >
                    <MenuItem value=''> Categories </MenuItem>
                    <MenuItem><Button onClick={() => setFilter(data)} >All Products </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("smartphones")} >Smart phones</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("laptops")}>Laptop </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("fragrances")} >Fragrances</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("skincare")} >Skincare</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("groceries")} >Groceries</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("home-decoration")} >home-decoration</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("furniture")} >Furniture</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("tops")} > Tops </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-dresses")}> Womens-dresses</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-shoes")}> Womens-shoes</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("mens-shirts")} > Mens-shirt</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("mens-shoes")} > Mens-shoes</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("mens-watches")} > Mens-watches</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-watches")} > Womens-watches</Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-bags")} > Womens-bags </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("womens-jewellery")} > Womens-jewellery </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("sunglasses")} > Sunglasses </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("automotive")} > Automotive </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("motorcycle")} > Motorcycle </Button></MenuItem>
                    <MenuItem><Button onClick={() => filterItem("lighting")} > Lighting </Button></MenuItem>
                </Select>
            </div>

            {/* this is categories section make by simple details and summary tage */}
            {/* <details> */}
            {/* <summary>Catergores</summary> */}
            {/* <Button onClick={() => setFilter(data)} >All Products </Button>
                    <Button onClick={() => filterItem("smartphones")} >Smart phones</Button>
                    <Button onClick={() => filterItem("laptops")}>Laptop </Button>
                    <Button onClick={() => filterItem("fragrances")} >Fragrances</Button>
                    <Button onClick={() => filterItem("skincare")} >Skincare</Button>
                    <Button onClick={() => filterItem("groceries")} >Groceries</Button>
                    <Button onClick={() => filterItem("home-decoration")} >home-decoration</Button>
                    <Button onClick={() => filterItem("furniture")} >Furniture</Button>
                    <Button onClick={() => filterItem("tops")} > Tops </Button>
                    <Button onClick={() => filterItem("womens-dresses")}> Womens-dresses</Button>
                    <Button onClick={() => filterItem("womens-shoes")}> Womens-shoes</Button>
                    <Button onClick={() => filterItem("mens-shirts")} > Mens-shirt</Button>
                    <Button onClick={() => filterItem("mens-shoes")} > Mens-shoes</Button>
                    <Button onClick={() => filterItem("mens-watches")} > Mens-watches</Button>
                    <Button onClick={() => filterItem("womens-watches")} > Womens-watches</Button>
                    <Button onClick={() => filterItem("womens-bags")} > Womens-bags </Button>
                    <Button onClick={() => filterItem("womens-jewellery")} > Womens-jewellery </Button>
                    <Button onClick={() => filterItem("sunglasses")} > Sunglasses </Button>
                    <Button onClick={() => filterItem("automotive")} > Automotive </Button>
                    <Button onClick={() => filterItem("motorcycle")} > Motorcycle </Button>
                    <Button onClick={() => filterItem("lighting")} > Lighting </Button> */}
            {/* </details> */}


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
                                        {/* <h5>{item.title}</h5> */}
                                        <p className="rating" >{`$ ${item.price}`} <Rating
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