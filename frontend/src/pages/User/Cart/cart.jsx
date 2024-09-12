
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './cart.css';
import { removeFromCart } from "../../../redux/features/cart/cartSlice";
import {  FaTrashAlt } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MovieCard from '../Movies/MovieCard';


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
    <Container className="mt-5">
      {cartItems.length === 0 ? (
        <div className="mt-4 text-center">
          <h3>Your Cart is Empty</h3>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 mt-4 custom-padding-left">Shopping Cart</h2>
          <Card className="p-4 mx-auto my-4" style={{ maxWidth: '1000px' }}>
          <Row>
            {cartItems.map((item) => (
              <Col md={12} key={item._id} className="mb-3">
                
                  <Row>
                    <Col md={3}>
                    <MovieCard movie={item} />
                    </Col>
                    <Col md={6}>
                      <h4>{item.moviename}</h4>
                      <p>Genre: {item.genre}</p>
                      <p>Language: {item.language}</p>
                      <p>Rating: {item.overallrating}</p>
                      <p>Reviews: {item.numReviews}</p>
                    </Col>
                    <Col md={3} className="text-right">
                      <h4>${item.price}</h4>
                     
                      <button type="submit" onClick={()=>deleteFromCart(item._id)} className="delete-cart-button rounded"><FaTrashAlt/></button>
                      
                    </Col>
                  </Row>
                
              </Col>
            ))}
          </Row>
         
            <Row>
              <Col md={6} className="text-end">
                <h5>Movies Price:</h5>
              </Col>
              <Col md={6}  className="text-start" >
                <h5>${itemsPrice}</h5>
              </Col>
            </Row>
            <Row >
              <Col md={6} className="text-end">
                <h5>Tax Price:</h5>
              </Col>
              <Col md={6} className="text-start">
                <h5>${taxPrice}</h5>
              </Col>
            </Row>
            <Row>
              <Col md={6}  className="text-end">
                <h4>Total Price:</h4>
              </Col>
              <Col md={6}  className="text-start">
                <h4>${totalPrice}</h4>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="text-center">
              <button 
             className="rounded checkout-button"            
              type="submit"
              onClick={onCheckOut}>
                  Proceed To Checkout
               </button>
              </Col>
            </Row>
        </Card>
        </div>
      )}
    </Container>
  );
   

}
export default Cart;