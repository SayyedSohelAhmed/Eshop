import react, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
import { AppBar, Badge, Button, TextField, useAutocomplete } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { handleSearch as searchConstant } from "../redux/cart/cart-constant";
import { manipulateCart } from "../redux/cart/cart-action";
const NavBar = () => {
    const searchItemTemp = useSelector((state) => state.searchItem)
    const dispatch = useDispatch()
    const [search, setSearch] = useState([])
    const cartLength = useSelector((state) => state.cartItems)

useEffect(() => {
        if (!search.length){
            setSearch(searchItemTemp)
        }
    }, [searchItemTemp])

    const handleSearch = ({ target: { value: text } }) => {
        if (text.trim() !== "") {
            let tempArr = search.filter(
                (item) =>
                    item.title.toLowerCase().includes(text.trim().toLowerCase())
            )
            // console.log(tempArr)
            dispatch(manipulateCart(searchConstant, tempArr))
        } else {
            dispatch(manipulateCart(searchConstant, search))
        }
    } 
    return (
        <>
            {/* { <div>
        <TextField className='navLinkItem'
                lable='Search item' />
                <NavLink className='navLinkItem' to="/Login" 
                style={({isActive})=>{return{color: isActive ?'red' : ''}}}> Login </NavLink>
                
                <NavLink className='navLinkItem' to='/products' 
                style={({isActive})=>{return{color: isActive ?'red' : ''}}}> HomePage </NavLink>
                
                <NavLink className='navLinkItem' to='/Setting' 
                style={({isActive})=>{return{color: isActive ?'red' : ''}}}> Setting </NavLink>                
                </div>  */}

            <div className="navbar_container">
                <Link to="/" > <img src="https://thumbs.dreamstime.com/b/online-shop-logo-ecommerce-design-vector-187896714.jpg" alt="" width='120px' height='100px' /> </Link>
                <TextField onChange={handleSearch} label='search items' />
                <div className="loginBtn_Container">
                    <Button className="loginBtn" variant="contained" >Login</Button>
                    <Badge badgeContent={cartLength?.length}  color = "primary" >
                        
                        <Link to='/addToCart'> <AddShoppingCartIcon /> </Link>
                    </Badge>
                </div>
            </div>
        </>
    )
}
export default NavBar;