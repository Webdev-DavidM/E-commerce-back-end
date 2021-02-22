import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide a value for 'email'"],
    },
    password: {
      type: String,
      required: [true, "Please provide a value for 'password'"],
    },
    firstName: {
      type: String,
      required: [true, "Please provide a value for 'first name'"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a value for 'last name'"],
    },
    address: {
      type: String,
      required: [true, "Please provide a value for 'address'"],
    },
    reviews: [],
    admin: {
      type: Boolean,
      required: [true, "Please provide a value for 'admin'"],
      default: false,
    },
  },
  { useUnifiedTopology: true }
);

const User = mongoose.model('User', usersSchema);

export default User;
