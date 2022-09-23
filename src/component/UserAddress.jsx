import { Table, TableCell, TableHead, TextField, width, TableBody, Button, Dialog, List, ListItemText, DialogTitle,  } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import react, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import "./UserAddress.css"
import { useDispatch, useSelector } from "react-redux";
import { manipulateCart } from "../redux/cart/cart-action";
import { ORDER_LIST } from "../redux/cart/cart-constant";
const UserAddress = () => {

    const [dialogBox, setDialogBox] = useState(false)

    const dispatch = useDispatch()
    const goToOrderHistory = useNavigate()
    const [list, setList] = useState([])
    const [data, setData] = useState({
        fName: '',
        lName: '',
        phone: '',
        address: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const newCartItem = useSelector((state) => state.cartItems)
    console.log("newCartItem====>", newCartItem)




    const goToOrderItem = () => {
        const orderList = [
            {
                orderItem: [...newCartItem],
                orderDetail: data
            }
        ]
        dispatch(manipulateCart(ORDER_LIST, orderList))
        setDialogBox(true);

    }
    console.log(data)
    const handleAddress = () => {
        setList([...list, data])
        console.log("===>",data)
        console.log("===>",list)
        
    }
    
    
    const dialogBoxClose = () => {
        setDialogBox(false)
        goToOrderHistory('/orderHistory')
    }

    return (
        <>
            <div className='flex_container' >
                <div className='address_main_container'>

                    <div className='input_container'>

                        <TextField
                            value={data.fName}
                            name='fName'
                            onChange={(e) => handleChange(e)}
                            type="text" label='First Name' /> <br />

                        <TextField
                            value={data.lName}
                            name='lName'
                            onChange={(e) => handleChange(e)}
                            type="text" label='Last Name' /> <br />

                        <TextField
                            value={data.phone}
                            name='phone'
                            onChange={(e) => handleChange(e)}
                            label='phone number' /> <br />
                        <TextField
                            value={data.address}
                            name='address'
                            onChange={(e) => handleChange(e)}
                            label='address' /> <br />

                        <Button variant='contained' onClick={() => { handleAddress(); goToOrderItem(); }} > ADD DELIVARY ADDRESS </Button>

                        <Dialog close={dialogBox} open={dialogBox}    >
                        <DialogTitle id="simple-dialog-title"> Congratulation your order successfull </DialogTitle>
                        <List>
                            {/* <ListItemText primary={`Name : ${fname} ${lname}`} />
                            <ListItemText primary={`Email : ${email}`} />
                            <ListItemText primary={`Password: ${password}`} />
                            <ListItemText primary={`Phone Number : ${phone}`} /> */}
                        </List>
                        <Button onClick={dialogBoxClose} > Go To YOUR ORDER </Button>
                    </Dialog>
                    </div>
                </div>
            </div>

        </>
    )
}
export default UserAddress;