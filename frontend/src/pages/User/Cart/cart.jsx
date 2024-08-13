
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './cart.css';
import { removeFromCart } from "../../../redux/features/cart/cartSlice";
import {  FaTrashAlt } from 'react-icons/fa';

const Cart = ()=>{
    const cart = useSelector((state)=>state.cart);
    const {cartItems,itemsPrice,taxPrice,totalPrice} = cart;
    const navigate = useNavigate();

    const onCheckOut = async(e)=>{
        navigate('/order');
    }  
    const dispatch = useDispatch();

    const deleteFromCart = (id)=>{
        dispatch(removeFromCart(id));
    }
   return (
    <>
    <div>
        {cartItems.length===0?
        (<div> Cart is Empty  </div>): 
        (<div className="cart-info">
            <h2>Shopping Cart</h2>
            {cartItems.map((item)=>
             <div key={item._id} className="cart-detail">
                 <img src={item.image} alt={item.moviename} className="cart-detail-image"/>
                 <div className="cart-detail-info">
                 <h3>{item.moviename}</h3>
                 <div className="cart-detail-indetail">Genre: {item.genre}</div>
                 <div className="cart-detail-indetail">Language: {item.language}</div>               
                 <div className="cart-detail-indetail">Rating:{item.overallrating}</div>
                 <div className="cart-detail-indetail">Reviews: {item.numReviews}</div>
                 <div className="delete-cart-button">
                <button type="submit" onClick={()=>deleteFromCart(item._id)}><FaTrashAlt/></button>
                </div>
                 </div>
                 <div className="cart-detail-price">
                   <h3> ${item.price}</h3> 
                </div>
                
            </div>
            )}
            <div>
                <h4 className="cart-detail-total-price">Movies price : ${itemsPrice}</h4>
                <h4 className="cart-detail-total-price">Tax price : ${taxPrice}</h4>
                <h4 className="cart-detail-total-price">Total price : ${totalPrice}</h4>
            </div>
            <div  className="cart-detail-button">
            <button 
             className="checkout-button"            
              type="submit"
              onClick={onCheckOut}>
            Proceed To Checkout
            </button>
            </div>
        </div>)}
    </div>
    </>
   )

}
export default Cart;