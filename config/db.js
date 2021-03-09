import mongoose from 'mongoose';

let uri = process.env.mongoURI;

// adjust the data connection below as required.

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://david:cheese123@cluster0.pfzyl.mongodb.net/My-e-commerce-fitness-app?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = await mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('were connected!');
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
