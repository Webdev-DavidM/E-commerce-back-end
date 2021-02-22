import express, { json } from 'express';
const app = express();
import jwt from 'jsonwebtoken';
import jwtVerify from '../middleware/jwtVerify.js';
import expressValidator from 'express-validator';
const { body, validationResult } = expressValidator;

import User from '../models/User.js';

// Note all admin routes are protected routes so I have chosen to store in them in a separate route from the
// users, I have added middleware to check there is a valid JWT token before adding the user. I will also check that the
// user requesting to change the products has admin rights with the server before making changes. I have also added a
// middleware called productDetailsCorrect to make sure that all the data required has been provided

/* POST route- this will create a new product in the database, */
// Below I am checking which category it is for so I know which model to add the product to

app.post(
  '/create',
  jwtVerify,
  body('name', 'Name is required').not().isEmpty(),
  body('price').isInt().not().isEmpty(),
  body('description', 'Description is required').not().isEmpty(),
  body('images', 'Image path is required').not().isEmpty(),
  body('stock').isInt().not().isEmpty(),
  body('size', 'Size is required').not().isEmpty(),
  body('reviews').isArray(),
  body('subcategory', 'Subcategory is required').not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let adminUser = await User.findOne({ email: req.email });

      if (adminUser) {
        if (adminUser.admin === false) {
          res
            .status(401)
            .json('You dont have authority to make these changes')
            .end();
        } else if (adminUser.admin === true) {
          // route to be completed when I have completed the admin section
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
  body('name', 'Name is required').isString().not().isEmpty(),
  body('price').isInt().not().isEmpty(),
  body('description', 'Description is required').isString().not().isEmpty(),
  body('images', 'Image path is required').isString().not().isEmpty(),
  body('stock').isInt().not().isEmpty(),
  body('size', 'Size is required').not().isEmpty(),
  body('reviews').isArray(),
  body('subcategory', 'Subcategory is required').isString().not().isEmpty(),
  async (req, res) => {
    const { productId } = req.params;
    const { email } = req;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
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

app.delete('/delete/:productId', jwtVerify, async (req, res) => {
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
});

export default app;
