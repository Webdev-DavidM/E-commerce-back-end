/* NPM packages */

import express from 'express';
const app = express();
import mongoose from 'mongoose';

/* Middleware */

import jwtVerify from '../middleware/jwtVerify.js';

/* Models */

import Orders from '../models/Orders.js';
import User from '../models/User.js';

// This route gets one particuylar order based on its ID, I will check that
// the JWT token is valid and then also in the userID in the header matches the
// ID of the order

app.get('/order/:orderId', jwtVerify, async (req, res, next) => {
  let { userid } = req.headers;
  const { orderId } = req.params;
  try {
    let order = await Orders.find({ _id: orderId }).populate('user');
    if (userid != order[0].user._id) {
      return res.status(401).json('unauthorised to view order');
    }
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(401).json('No orders found');
    }
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

// This gets the orders for a particular user

app.get('/:userId', jwtVerify, async (req, res) => {
  const { userId } = req.params;
  try {
    let orders = await Orders.find({ user: userId });
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(401).json('No orders found');
    }
  } catch (err) {
    res.status(401).json(err);
  }
});

// This creates a new order from the user

app.post('/new-order', jwtVerify, async (req, res, next) => {
  let { userId, date, orderItems, total, status } = req.body.orderInfo;
  let idConverted = mongoose.Types.ObjectId(userId);
  console.log('orderItems', orderItems);
  let orders = orderItems.map((item) => {
    delete item.images;
    delete item.qtyOfSizeInStock;
    item.item = item.id;
    item.qty = item.quantity;
    delete item.id;
    delete item.quantity;
    return item;
  });

  let order = new Orders({
    user: idConverted,
    dateOfOrder: date,
    orderItems: orders,
    total: total,
    status: status,
  });

  try {
    let savedOrder = await order.save();
    if (savedOrder) {
      res.status(201).json(savedOrder);
    }
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

export default app;
