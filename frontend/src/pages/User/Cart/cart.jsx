
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Card,Row,Col,Container} from 'react-bootstrap';
import './cart.css';

const Cart = ()=>{
    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart;
   return (
    <>
    <div>
        {cartItems.length===0?
        (<div> Cart is Empty  </div>): 
        (<div>
            <h1>Shopping Cart</h1>
            {cartItems.map((item)=>
             <div key={item._id}>
                 <img src={item.image} alt={item.moviename}></img>
                 <div></div>
            </div>
            )}
           

        </div>)}
    </div>
    </>
   )

}
export default Cart;