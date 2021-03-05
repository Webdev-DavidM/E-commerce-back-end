import express, { json } from 'express';
const app = express();
import jwt from 'jsonwebtoken';
import jwtVerify from '../middleware/jwtVerify.js';
import expressValidator from 'express-validator';
const { body, validationResult } = expressValidator;
import Product from '../models/Products.js';

import User from '../models/User.js';

import multer from 'multer';
// var upload = multer({ dest: 'uploads/' });

import fileUpload from '../middleware/file-uploads.js';

// Note all admin routes are protected routes so I have chosen to store in them in a separate route from the
// users, I have added middleware to check there is a valid JWT token before adding the user. I will also check that the
// user requesting to change the products has admin rights with the server before making changes. I have also added a
// middleware called productDetailsCorrect to make sure that all the data required has been provided

/* POST route- this will create a new product in the database, */

app.post(
  '/create',
  jwtVerify,
  fileUpload.array('images', 4),

  // body('name', 'Name is required').not().isEmpty(),
  // body('price').not().isEmpty(),
  // body('description', 'Description is required').not().isEmpty(),
  // body('stock').not().isEmpty(),
  // body('small', 'Size is required').not().isEmpty(),
  // body('category', 'Category is required').not().isEmpty(),
  // body('subcategory', 'Subcategory is required').not().isEmpty(),
  async (req, res) => {
    console.log(req.body, req.files);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
      let adminUser = await User.findOne({ email: req.email });

      if (adminUser) {
        if (adminUser.admin === false) {
          res
            .status(401)
            .json('You dont have authority to make these changes')
            .end();
        } else if (adminUser.admin === true) {
          let {
            name,
            description,
            small,
            medium,
            large,
            brand,
            colour,
            category,
            subcategory,
          } = req.body;

          small = parseInt(small);
          medium = parseInt(medium);
          large = parseInt(large);

          let stock = parseInt(small + medium + large);
          let price = parseInt(req.body.price);

          // Here I will access the image files paths and put them in an array so the front end can use them
          //Note to use muliple files the details are stored under req.files, a single image file is req.file(no s)

          let imagesPathsArray = req.files.map((image) => {
            return `/uploadedimages/${image.filename}`;
          });

          let newProduct = await new Product({
            name,
            price: price,
            description,
            images: imagesPathsArray,
            stock: stock,
            size: [{ small: small, medium: medium, large: large }],
            brand,
            colour,
            category,
            reviews: [],
            subcategory,
          });
          let createdProduct = await newProduct.save();
          if (createdProduct) {
            res.status(201).json(createdProduct);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
);

/* PUT route- this will update an existing product in the database, */

app.put(
  '/update/:productId',
  jwtVerify,

  // body('name', 'Name is required').isString().not().isEmpty(),
  // body('price').isInt().not().isEmpty(),
  // body('description', 'Description is required').isString().not().isEmpty(),
  // body('images', 'Image path is required').isString().not().isEmpty(),
  // body('stock').isInt().not().isEmpty(),
  // body('size', 'Size is required').not().isEmpty(),
  // body('reviews').isArray(),
  // body('subcategory', 'Subcategory is required').isString().not().isEmpty(),
  async (req, res) => {
    const { productId } = req.params;
    console.log(req.body);
    const { email } = req;
    const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
      let adminUser = await User.findOne({ email });

      if (adminUser) {
        if (adminUser.admin === false) {
          res
            .status(401)
            .json('You dont have authority to make these changes')
            .end();
        } else if (adminUser.admin === true) {
          //route to be completed when I have started the admin section
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
);

/* PUT route- this will update an existing product in the database, */

app.delete(
  '/delete/:productId',
  jwtVerify,

  async (req, res) => {
    const { productId } = req.params;
    const { email } = req;
    try {
      let adminUser = await User.findOne({ email });

      if (adminUser) {
        if (adminUser.admin === false) {
          res
            .status(401)
            .json('You dont have authority to make these changes')
            .end();
        } else if (adminUser.admin === true) {
          switch (req.headers.category) {
            case 'cycle':
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export default app;
