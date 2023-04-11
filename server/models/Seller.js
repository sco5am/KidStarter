const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Product = require('./Product');

const sellerSchema = new Schema({
  guardianPresent: {
    type: Boolean, 
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  orgName: {
    type: String,
    required: true,
    trim: true
  },
  //string for now
  location: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  //correct values?
  products: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true 
  }
});

// sets up pre-save middleware to create password
sellerSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compares entered password with the hashed password
sellerSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
