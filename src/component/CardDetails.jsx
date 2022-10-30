import react, { useEffect, useState } from 'react'
import "./CardDetails.css"
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom"
import { ADD_ITEM } from '../redux/cart/cart-constant'
import { manipulateCart } from "../redux/cart/cart-action"
import { useSelector } from "react-redux"
import { Button, Checkbox } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { CheckBox, Favorite, FavoriteBorder } from '@mui/icons-material'
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

        // console.log('HERE : ', received)
        if (cartItems.filter((item) => item.id === mapCartItem.id).length) {
            setIsGoToCartVisible(true);
        } else {
            setIsGoToCartVisible(false);
        }
    }, [cartItems, mapCartItem])

    const handleAddToCart = (mapCartItem) => {
        dispatch(manipulateCart(ADD_ITEM, { ...mapCartItem, qty: 1 }))
        // navigate('/addToCart', { state: mapCartItem })
        
    }
    const handleGoToCart = (mapCartItem) => {
        navigate("/addToCart", { state: mapCartItem })
    }


    return (
        <>
            <h1> Card Details ... </h1>
            <div className='flex' 
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="200">
                <div className='cardDetails_container'>
                    <div>
                        <img className='cardDetails_img' src={mapCartItem.thumbnail} alt="" />
                    </div>
                    <div>
                        <span className='favourite_icon' >
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color={'secondary'} />
                        </span>
                    </div>
                    <div className='cardDetails_title'>
                        <div className='share_icon'>
                            <ShareIcon />
                        </div>
                        <h1> {mapCartItem?.title}</h1>
                        <span><h2> {`$ ${mapCartItem?.price} Only/-`} </h2>
                        <h4 className="discountPercentage">{`${mapCartItem.discountPercentage}% off`}</h4></span>
                        <p>{mapCartItem?.description}</p>
                        <p>Free delivary by tomorrow</p>
                        <div className='cardDetails_btn'>

                            <Button variant='contained' style={{ backgroundColor: "#fb641b" }} > BUY NOW </Button>
                            {isGoToCartVisible ? (<Button variant='contained' onClick={() => handleGoToCart(mapCartItem)} style={{ backgroundColor: "#ff9f00" }} > GO TO CART</Button>)
                                : (<Button variant='contained' onClick={() => handleAddToCart(mapCartItem)} style={{ backgroundColor: "#ff9f00" }} > ADD TO CART </Button>)
                            }
                        </div>
                        <p className="stock">
                            {mapCartItem?.stock <= 33
                                ? `Only ${mapCartItem?.stock} Available`
                                : "Available"}
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}
export default CardDetails;