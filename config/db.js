const mongoose = require('mongoose');
//const config = require('config');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    //Exit procces with failure
    process.exit(1);
  }
};

module.exports = connectDB;
