import mongoose from 'mongoose';

//please just the name of the model titles as required

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a value for 'name'"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a value for 'price'"],
    },
    description: {
      type: String,
      required: [true, "Please provide a value for 'description'"],
    },
    images: {
      type: Array,
      required: [true, "Please provide a value for 'images'"],
    },
    stock: {
      type: Number,
      required: [true, "Please provide a value for 'stock'"],
    },
    size: {
      type: Object,
      required: [true, "Please provide a value for 'size'"],
    },
    brand: {
      type: String,
      required: [true, "Please provide a value for 'brand'"],
    },
    colour: {
      type: String,
      required: [true, "Please provide a value for 'colour'"],
    },
    reviews: {
      type: Array,
      required: [true, 'Please provide a value for reviews even if empty'],
    },
    category: {
      type: String,
      required: [true, "Please provide a value for 'category'"],
    },
    subcategory: {
      type: String,
      required: [true, "Please provide a value for 'subcategory'"],
    },
  },

  { useUnifiedTopology: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
