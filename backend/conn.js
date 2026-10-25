
const mongoose = require('mongoose');
const URL = process.env.MONGO_URI;

mongoose.Promise = global.Promise;

mongoose.connect(URL)
  .then(() => console.log('MongoDB Atlas connected successfully'))
  .catch((err) => console.error('MongoDB connection failed:', err));

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('DB ERROR:', err.message);
});

module.exports = { db, mongoose };
