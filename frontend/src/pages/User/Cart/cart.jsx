
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './cart.css';

const Cart = ()=>{
    const cart = useSelector((state)=>state.cart);
    const {cartItems,itemsPrice} = cart;
    const navigate = useNavigate();

    const onCheckOut = async(e)=>{
        navigate('/order');
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
                 </div>
                 <div className="cart-detail-price">
                   <h3> ${item.price}</h3> 
                </div>
            </div>
            )}
            <div>
                <h4 className="cart-detail-total-price">Total price: {itemsPrice}</h4>
            <button             
              type="submit"
              className="cart-detail-button" onClick={onCheckOut}>
            Proceed To Checkout
            </button>
            </div>
        </div>)}
    </div>
    </>
   )

}
export default Cart;