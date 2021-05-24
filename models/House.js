const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  product: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    coordinates: {
        latitude: {
        type: String,
        required: true,
      },
        longitude: {
        type: String,
        required: true,
      }
    }
  },
  builder: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  square: {
    type: Number,
    required: true,
  },
  hasBasement: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  garage: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  amenities: [{
    type: String,
    required: true
  }],
  images: [{
    type: String,
    required: true
  }],
});

module.exports = mongoose.models.House || mongoose.model('House', HouseSchema);
