import react from "react"
import { INCREASE_1, INCREASE_2, INCREASE_5 } from "../redux/cart/cart-constant"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { manipulateCart } from "../redux/cart/cart-action"
const Counter = ()=>{
    const selector = useSelector((state)=>state.count)
    console.log("selector chala",selector);
    const dispatch = useDispatch()
    const handleIncrease_1 = ()=>{
        dispatch(manipulateCart(INCREASE_1,))
    }

    const handleIncrease_2 = ()=>{
        dispatch(manipulateCart(INCREASE_2))
    }
    const handleIncrease_5 = ()=>{
        dispatch(manipulateCart(INCREASE_5))
    }
    return (
        <>
            <h1> {selector} </h1>
            <button onClick={handleIncrease_1} > == 1 == </button>
            <button onClick={handleIncrease_2}> == 2 == </button>
            <button onClick={handleIncrease_5}> == 5 == </button>
        </>
    )
}
export default Counter;