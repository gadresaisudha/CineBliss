import { useDispatch, useSelector } from "react-redux";
import './order.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { clearCartItems } from "../../../redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "../../../redux/api/orderApiSlice";


const Order = ()=>{
const cart = useSelector((state)=>state.cart);
const {totalPrice} = cart;
const [order,{isLoading,error}] =  useCreateOrderMutation();
const navigate = useNavigate();
const dispatch = useDispatch();

const onPlaceOrder = async(e)=>{

   try{
    const res = await order({
        orderItems : cart.cartItems,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        totalPrice:cart.totalPrice,

    }).unwrap();
    navigate('/home');
    dispatch(clearCartItems())
   }
   catch(error){
    toast.error(error);
   }
}
return(
    <>
    <div className='order'>
        <div>Total Amount : {totalPrice}</div>
        <button             
              type="submit"
              className="cart-detail-button" onClick={onPlaceOrder}>
             Place Order
            </button>
    </div>
    </>
)

}

export default Order;