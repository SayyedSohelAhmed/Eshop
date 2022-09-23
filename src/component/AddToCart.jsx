import React, { useState, useEffect } from "react"
import "./AddToCart.css"
import { useLocation, useNavigate } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { manipulateCart } from "../redux/cart/cart-action";
import { REMOVE_ITEM, UPDATE_QTY, } from "../redux/cart/cart-constant"
const AddToCart = () => {
    const placeNavigate = useNavigate()
    const received = useLocation()
    // const { state, index } = received

    /////
    const [totalCal, setTotalCal] = useState({
        price: 0.0,
        discount: 0.0,
        deliveryCharge: 4,
        total: 0.0,
    });

    const cartItems = useSelector((state) => state.cartItems);
    console.log("cartItems===>", cartItems)
    const dispatch = useDispatch();


    useEffect(() => {
        if (cartItems.length) {
            var totalTemp = 0;
            var priceTemp = 0;
            var discountTemp = 0;

            cartItems.map((item) => {
                discountTemp =
                    (discountTemp + (item.price * item.discountPercentage) / 100) *
                    item.qty;
                totalTemp = (totalTemp + item.price) * item.qty;
                priceTemp = (totalTemp + discountTemp) * item.qty;
                console.log("priceTemp", priceTemp)
                console.log("discountTemp", discountTemp)
                console.log("totalTemp", totalTemp)
            });

            setTotalCal((prevState) => ({
                ...prevState,
                price: Math.floor(priceTemp).toFixed(2),
                discount: Math.floor(discountTemp).toFixed(2),
                total: Math.floor(totalTemp).toFixed(2),
            }));
        }
    }, [cartItems]);

    const handleRemove = (item) => {
        dispatch(manipulateCart(REMOVE_ITEM, item.id));
    };

    const handleUpdateQty = (index, isIncrease) => {
        var tempData = cartItems;
        if (isIncrease) {
            tempData[index].qty += 1;
        } else {
            if (tempData[index].qty > 1) {
                tempData[index].qty -= 1;
            } else {
                handleRemove(tempData[index]);
                return;
            }
        }
        dispatch(manipulateCart(UPDATE_QTY, tempData));
    };
    const handlePlaceOrder = () => {
        placeNavigate('/userAddress')
    }
    return (
        <>

            {cartItems.length ? (<div className="main_container"  
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="200">
                <div className="addToCart_container">
                    {cartItems &&
                        cartItems.map((item, index) => (
                            <>
                                <div className="cartItem_warper">
                                    <div className="addToCartImg_container">
                                        <img className="addToCart_img" src={item.thumbnail} alt="" />
                                    </div>
                                    <div className="addToCartSide_container">
                                        <div className="midle_container">
                                            <h2>{item.title}</h2>
                                            <h1> {`$ ${item.price} Only/-`}</h1>
                                            <div className="removeBtn" >
                                                <Button className="" variant="text">save for later </Button>
                                                <Button onClick={() => handleRemove(item)} className="" variant="text">remove</Button>
                                            </div>
                                            <div className='qty_container' >
                                                <AddIcon onClick={() => handleUpdateQty(index, true)} className='add' />
                                                <span>
                                                    <input
                                                        className="input-qty"
                                                        type="text"
                                                        value={item.qty}
                                                    />
                                                </span>
                                                <RemoveIcon onClick={() => handleUpdateQty(index)} className='remove' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                </div>
                <div className="price_container" >
                    <span><h2>PRICE DETAILS... </h2></span>
                    <h4> price : .....{totalCal.price}</h4>
                    <h4> discount price : .....{totalCal.discount} </h4>
                    <h4> total price: ..... {totalCal.total}</h4>
                    <Button onClick={handlePlaceOrder} variant='contained' style={{ backgroundColor: "orange" }}  > ORDER PLACED </Button>
                </div>
            </div>) : (
                <div> Cart is empty</div>
            )}
        </>
    )
}
export default AddToCart;