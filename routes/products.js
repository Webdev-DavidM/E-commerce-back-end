/* NPM packages */
import multer from 'multer';
export const upload = multer({ dest: 'uploads/' });
import express from 'express';
const app = express();

// with es6 modules i haver to use the full filename with .js otherwise it wont find it unlike in react with babel.
/* Models */

import Product from '../models/Products.js';

// This will return all the products for the search bar //

app.get('/all', async (req, res) => {
  try {
    let products = await Product.find({});
    console.log(products);
    if (products) {
      res.status(200).json(products).end();
    } else {
      res.status(401).json('no products found');
    }
  } catch (err) {
    res.json(err);
  }
});

// GET request- return all the products, I will let redux choose which
// Products to display based on the category and subcategory properties

app.get('/:category', async (req, res) => {
  let { category } = req.params;
  try {
    let products = await Product.find({ category });
    if (products) {
      res.status(200).json(products).end();
    } else {
      res.status(401).json(`No ${category} found`).end();
    }
  } catch (err) {
    res.json(err);
  }
});

// Get one Product from the document

app.get('/product/:id', async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.status(200).json(product).end();
    } else {
      res.status(401).json('No product found').end();
    }
  } catch (err) {
    res.json(err);
  }
});

// POST route- this will post a review to a product, this route doesnt require
// JWT verification as the user must have been verified on the front end to be accessing
// their account screen

app.post('/review/:productId', async (req, res) => {
  let review = req.body.data;
  let { productId } = req.params;
  console.log(productId, review);

  try {
    let product = await Product.findOne({ _id: productId });
    if (product) {
      let duplicateReview = product.reviews.filter(
        (reviewInDatabase) => reviewInDatabase.userId === review.userId
      );
      if (duplicateReview.length === 0) {
        product.reviews.push(review);
        await product.save();
        return res.status(200).json(product).end();
      } else {
        res
          .status(406)
          .json({ error: 'You have reviewed this product already' })
          .end();
      }
    } else {
      res.status(401).json('No product found').end();
    }
  } catch (err) {
    res.json(err);
  }
});

export default app;
