import Order from '../models/orderModel.js';
import Movie from '../models/movieModel.js';

function calcPrices(orderItems) {
    const itemsPrice = orderItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
  
    const shippingPrice = itemsPrice > 100 ? 0 : 10;
    const taxRate = 0.15;
    const taxPrice = (itemsPrice * taxRate).toFixed(2);
  
    const totalPrice = (
      itemsPrice +
      shippingPrice +
      parseFloat(taxPrice)
    ).toFixed(2);
  
    return {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice: shippingPrice.toFixed(2),
      taxPrice,
      totalPrice,
    };
  }

  const createOrder = async(req,res)=>{
    try {
        const { orderItems } = req.body;
    
        if (orderItems && orderItems.length === 0) {
          res.status(400);
          throw new Error("No order items");
        }
    
        const itemsFromDB = await Movie.find({
          _id: { $in: orderItems.map((x) => x._id) },
        });
       
        const dbOrderItems = orderItems.map((itemFromClient) => {
          const matchingItemFromDB = itemsFromDB.find(
            (itemFromDB) => itemFromDB._id.toString() === itemFromClient._id
          );
    
          if (!matchingItemFromDB) {
            res.status(404);
            throw new Error(`Movie not found: ${itemFromClient._id}`);
          }
    
          return {
            ...itemFromClient,
            movie: itemFromClient._id,
            price: matchingItemFromDB.price,
            _id: undefined,
          };
        });
    
        const { itemsPrice, taxPrice, totalPrice } =
          calcPrices(dbOrderItems);
    
        const order = new Order({
          orderItems: dbOrderItems,
          user: req.user._id,
          itemsPrice,
          taxPrice,
          totalPrice,
        });
    
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  const getUserOrders = async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  export {createOrder,getUserOrders};