import express, { json } from 'express';
const app = express();
import jwt from 'jsonwebtoken';
import jwtVerify from '../middleware/jwtVerify.js';
import expressValidator from 'express-validator';
const { body, validationResult } = expressValidator;
import Product from '../models/Products.js';
import Orders from '../models/Orders.js';
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
  async (req, res, next) => {
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
      let error = new Error('Opps something went wrong');
      next(error);
    }
  }
);

/* PUT route- this will update an existing product in the database, */

app.post(
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
  async (req, res, next) => {
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
          let {
            name,
            price,
            size,
            brand,
            colour,
            category,
            subcategory,
            description,
          } = req.body;
          let productToUpdate = await Product.findOne({ _id: productId });
          if (productToUpdate) {
            (productToUpdate.name = name),
              (productToUpdate.price = price),
              (productToUpdate.brand = brand),
              (productToUpdate.description = description),
              (productToUpdate.colour = colour),
              (productToUpdate.size = [size]),
              (productToUpdate.stock = size.small + size.medium + size.large),
              (productToUpdate.category = category),
              (productToUpdate.subcategory = subcategory);

            let updatedProduct = await productToUpdate.save();
            if (updatedProduct) {
              return res.status(204).json();
            }
          } else {
            return res.status(401).json('No such product to update');
          }
        }
      } else {
        res.status(404).json('No such user').end();
      }
    } catch (err) {
      console.log(err);
      let error = new Error('Opps something went wrong');
      next(error);
    }
  }
);

/* PUT route- this will update an existing product in the database, */

app.delete(
  '/delete/:productId',
  jwtVerify,

  async (req, res, next) => {
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
          let deleted = await Product.deleteOne({ _id: req.params.productId });
          res.status(204).json();
        }
      }
    } catch (err) {
      let error = new Error('Opps something went wrong');
      next(error);
    }
  }
);

app.delete(
  '/deleteimage/:productId',
  jwtVerify,

  async (req, res, next) => {
    console.log(req.body);
    const { productId } = req.params;
    const { email } = req;
    console.log(productId);
    try {
      let adminUser = await User.findOne({ email });

      if (adminUser) {
        if (adminUser.admin === false) {
          return res
            .status(401)
            .json('You dont have authority to make these changes')
            .end();
        } else if (adminUser.admin === true) {
          console.log('route hit');
          let productToDeleteImageFrom = await Product.findOne({
            _id: productId,
          });
          let updatedImages = productToDeleteImageFrom.images.filter(
            (image, index) => {
              if (index !== parseInt(req.headers.index)) {
                return image;
              }
            }
          );
          console.log(updatedImages);

          productToDeleteImageFrom.images = updatedImages;
          let update = await productToDeleteImageFrom.save();
          if (update) {
            console.log(productToDeleteImageFrom);
            return res.status(201).json(productToDeleteImageFrom).end();
          } else {
            return res.status(404).json('no product found');
          }
        }
      }
    } catch (err) {
      let error = new Error('Opps something went wrong');
      next(error);
    }
  }
);

app.post(
  '/addimage/:productId',
  jwtVerify,
  fileUpload.single('image'),

  async (req, res, next) => {
    console.log(req.body);
    const { productId } = req.params;
    const { email } = req;
    console.log(req.file);
    try {
      let adminUser = await User.findOne({ email });

      if (adminUser) {
        if (adminUser.admin === false) {
          return res
            .status(401)
            .json('You dont have authority to make these changes')
            .end();
        } else if (adminUser.admin === true) {
          console.log('route hit');
          let productToDeleteImageFrom = await Product.findOne({
            _id: productId,
          });

          productToDeleteImageFrom.images.push(
            `/uploadedimages/${req.file.filename}`
          );
          let update = await productToDeleteImageFrom.save();
          if (update) {
            console.log(productToDeleteImageFrom);
            return res.status(201).json(productToDeleteImageFrom).end();
          } else {
            return res.status(404).json('no product found');
          }
        }
      }
    } catch (err) {
      let error = new Error('Opps something went wrong');
      next(error);
    }
  }
);

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
  async (req, res, next) => {
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
      let error = new Error('Opps something went wrong');
      next(error);
    }
  }
);

// Get orders for all users */

// This gets the orders for a particular user

app.get('/allorders', jwtVerify, async (req, res, next) => {
  try {
    let orders = await Orders.find();
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(401).json('No orders found');
    }
  } catch (err) {
    let error = new Error('Opps something went wrong');
    next(error);
  }
});

export default app;
