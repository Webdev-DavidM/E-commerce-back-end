// I have chosen to use ES6 modules in this project rather than common js require. To do this I have added   "type": "module" in the package json file. also to note es6 modules

// importing environmental variables
import './loadEnv.js';

// import express

import express from 'express';
const app = express();

//cors variable
import cors from 'cors';

// morgan is a middle ware which will details all http requests in the console

// multer is used to upload photos from the user
import multer from 'multer';
export const upload = multer({ dest: 'uploads/' });

//cors allows http requests from other domains.

let uri = process.env.mongoURI;

// adjust the data connection below as required.

app.use(cors());

// morgan logs any http requests in the console for tracking.
import morgan from 'morgan';
app.use(morgan('combined'));

// here I am importing the database which has been set up in the config folder, in node always put the filename at the end

import connectDB from './config/db.js';
connectDB();

// es6 doesnt wrap the modules in a wrapper so __dirname doesnt exist so i am creating it below with path.resolve
import path from 'path';
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//below I am making my static public foldeer with images and uploads available

// below runs the request through each use line of code, adjust as need be

// import ordersRouter from './routes/orders.js';
import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';
import adminuserRouter from './routes/adminuser.js';
import ordersRouter from './routes/orders.js';

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/adminuser', adminuserRouter);
app.use('/orders', ordersRouter);

app.get('/', (req, res) => {
  res.json('welcome to the e-commerce api');
});

// Below will serve my images for the products and also uploaded images when new products are
// created

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on port', port);
});
