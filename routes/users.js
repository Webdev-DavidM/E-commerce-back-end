/* NPM packages */

import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import expressValidator from 'express-validator';
const { body, validationResult } = expressValidator;

// with es6 modules i haver to use the full filename with .js otherwise it wont find it unlike in react with babel.
/* Models */
import User from '../models/User.js';

// import AdminUser from "../models/AdminUser.js";

/* Middleware */
import jwt from '../helpers/jwtCreate.js';
import jwtVerify from '../middleware/jwtVerify.js';

// with es6 modules i haver to use the full filename with .js otherwise it wont find it unlike in react with babel.

// POST route- user register, this route, checks an email doesnt already exist and if
// it doesnt then it bcrypts the password, save the user to the server and then
// create JWT token and sends info back to the front-end

app.post('/register', async (req, res, next) => {
  // Firstly I will make sure the user doesnt exist on the database already
  let existingUser = await User.find({ email: req.body.email });
  if (existingUser.length !== 0) {
    return res
      .status(401)
      .json('The email address is already on the system, please log in.');
  }

  //Below I will bcrypt the password
  let { firstName, password, address, email, lastName } = req.body;
  console.log(req.body);
  // below I create an instance of user so I can save it to the database below.
  // I use save rather than create because save is async and returns the user
  // which includes the user id which i need to create the jwt token

  let user = await new User({
    password: password,
    firstName,
    lastName,
    address,
    // email,
    admin: false,
  });

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    let savedUser = await user.save();
    let token = jwt(savedUser);
    let date = new Date();
    let seconds = date.getTime();
    res.status(201).json({
      email: user.email,
      id: user._id,
      address,
      token,
      seconds,
      firstName,
      lastName,
      admin: false,
    });
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

//POST route- login user, this route checks if the user exists on the database, compared the bcrypt
// password and then create a JWT token and sends it back to the front-end

app.post('/login', async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json('No user found');
    }
    if (user) {
      // Here I am checking if the bcrypt password works
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          let token = jwt(user._id);
          let date = new Date();
          let seconds = date.getTime();
          res.status(202).json({
            firstName: user.firstName,
            lastName: user.lastName,
            id: user._id,
            token,
            seconds,
            email: user.email,
            address: user.address,
            admin: user.admin,
          });
        } else {
          res.status(401).json('Unauthorised');
        }
      });
    }
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

export default app;
