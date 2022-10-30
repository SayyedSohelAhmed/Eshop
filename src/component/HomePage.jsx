import axios from "axios"
import react, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation, useParams } from "react-router-dom"
import { BASE_URL } from "../Api/ApiProducts"
import { manipulateCart } from "../redux/cart/cart-action"
import { handleSearch } from "../redux/cart/cart-constant"
import { Button, Rating, Select, MenuItem } from "@mui/material";
import "./HomePage.css"
import NavImage from "../component/NavImage"
import BannerCarousel from "./BannerCarousel"
import filterItem from "../constant/filterFunction"
import ShortProduct from "./ShortedProducts"

const HomePage = () => {
    const [price, setPrice] = useState([])
    const [lowPrice, setLowPrice] = useState([])
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [value, setValue] = useState(1)
    const [course, setCourse] = useState('')

    const searchItem = useSelector((state) => state.searchItem)
    const dispatch = useDispatch()
    const fetchApi = () => {

        axios.get(BASE_URL).then((res) => {
            setData(res.data.products)
            dispatch(manipulateCart(handleSearch, res.data.products))
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

    useEffect(() => {
        filterData()
    }, [data])

    const updateValue = (e, item) => {
        console.log(e.target.value)
        setCourse(e.target.value)
    }


    // filter short product by value 400 to 800
    const filterData = () => {
        let price = data.filter((item) => {
            return item.price > 400 && item.price < 800;
        })
        setPrice([...price]);

        const lowPrice = data.filter((item) => {
            return item.prcie >= 1 || item.price <= 100;
        })
        setLowPrice([...lowPrice])
    }

    return (
        <>
            <div>
                <h1>home page</h1>
                {/* <NavImage /> */}
                <BannerCarousel />
                {/* <ShortProduct SectionTitle={"Best Price"} dataForSection={price} /> */}
                {/* <ShortProduct SectionTitle={"0 to 100"} dataForSection={lowPrice} /> */}

            </div>

            <div className="category_buttons">
                <Button variant='contained' onClick={() => setFilter(data)} >All Products </Button>
                <Button variant='contained' onClick={() => filterItem("smartphones", setFilter, data)} >Smart phones</Button>
                <Button variant='contained' onClick={() => filterItem("laptops", setFilter, data)}>Laptop </Button>
                <Button variant='contained' onClick={() => filterItem("fragrances", setFilter, data)} >Fragrances</Button>
                <Button variant='contained' onClick={() => filterItem("skincare", setFilter, data)} >Skincare</Button>
                <Button variant='contained' onClick={() => filterItem("groceries", setFilter, data)} >Groceries</Button>
                <Button variant='contained' onClick={() => filterItem("home-decoration", setFilter, data)} >home-decoration</Button>
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
                </Select>
            </div>
            <div className="main_containerOfCards" >
                {filter?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div  className="main_container" >

                                <div className="card_container" onClick={() => goToDetailCard(item)} >
                                    <div className="img_container">
                                        <img className="card_img" src={item.thumbnail} alt="" data-aos="zoom-in" />
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
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default HomePage;