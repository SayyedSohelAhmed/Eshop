import react, { useEffect, useState } from 'react'
import "./CardDetails.css"
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom"
import { ADD_ITEM } from '../redux/cart/cart-constant'
import { manipulateCart } from "../redux/cart/cart-action"
import { useSelector } from "react-redux"
import { Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
const CardDetails = () => {
    const [isGoToCartVisible, setIsGoToCartVisible] = useState(false)
    ////
    const received = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const mapCartItem = received.state
    const index = received?.state
    ////

    // redux //
    const cartItems = useSelector((state) => state.cartItems)

    useEffect(() => {

        console.log('HERE : ', received)
        if (cartItems.filter((item) => item.id === mapCartItem.id).length) {
            setIsGoToCartVisible(true);
        } else {
            setIsGoToCartVisible(false);
        }
    }, [cartItems, mapCartItem])

    const handleAddToCart = (mapCartItem) => {
        dispatch(manipulateCart(ADD_ITEM, { ...mapCartItem, qty: 1 }))
        navigate('/addToCart', { state: mapCartItem })
    }
    const handleGoToCart = (mapCartItem) => {
        navigate("/addToCart", { state: mapCartItem })
    }


    return (
        <>
            <h1> Card Details ... </h1>
            
            {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators" >
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="500">
                        <img src={mapCartItem?.images[0]} class="d-block w-30" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="800">
                        <img src={mapCartItem?.images[1]} alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={mapCartItem?.images[2]}data-bs-interval="1300" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={mapCartItem?.images[3]} data-bs-interval="1700" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={mapCartItem?.images[4]} data-bs-interval="2100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
            
            <div className='cardDetails_container'>
                <div>
                    <img className='cardDetails_img' src={mapCartItem.thumbnail} alt="" />
                </div>
                <div>
                    <span className='favourite_icon' ><FavoriteBorderIcon /></span>
                </div>
                <div className='cardDetails_title'>
                    <div className='share_icon'>
                        <ShareIcon />
                    </div>
                    <h1> {mapCartItem?.title}</h1>
                    <h2> {`$ ${mapCartItem?.price} Only/-`} </h2>
                    <p>{mapCartItem?.description}</p>
                    <p>Free delivary by tomorrow</p>
                    <div className='cardDetails_btn'>

                        <Button variant='contained' sx={{ backgroundColor: "#fb641b" }} > BUY NOW </Button>
                        {isGoToCartVisible ? (<Button variant='contained' onClick={() => handleGoToCart(mapCartItem)} sx={{ backgroundColor: "#ff9f00" }} > GO TO CART</Button>)
                            : (<Button variant='contained' onClick={() => handleAddToCart(mapCartItem)} sx={{ backgroundColor: "#ff9f00" }} > ADD TO CART </Button>)
                        }
                    </div>
                    <p className="stock">
                        {mapCartItem?.stock <= 33
                            ? `Only ${mapCartItem?.stock} Available`
                            : "Available"}
                    </p>
                </div>

            </div>


        </>
    )
}
export default CardDetails;