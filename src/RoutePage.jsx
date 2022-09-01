import react from "react"
import { Routes ,Route} from "react-router-dom";
import CardDetails from "./component/CardDetails";
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import Login from './component/Login';
import AddToCart from "./component/AddToCart";
import UserAddress from "./component/UserAddress";
import OrderHistory from "./component/OrderHistory";
const RoutePage=()=>{
    return(
        <>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/cardDetail" element={<CardDetails/>} />
                    <Route path="/addToCart" element={<AddToCart/>}/>
                    <Route path="/userAddress" element={<UserAddress/>}/>
                    <Route path="/orderHistory" element={<OrderHistory/>} />
                </Routes>
            </div>
        </>
    )
}
export default RoutePage;