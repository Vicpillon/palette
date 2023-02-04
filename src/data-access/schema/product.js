<<<<<<< HEAD
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     company: {
//         type: String,
//         required: true,
//     }
// });

// module.exports = productSchema;

const { Schema } = require('mongoose');

const productSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = productSchema;
=======
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    remaining: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Product",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = productSchema;
>>>>>>> fa513838f6ba9bfb692109f403dbfd351a7c2adf
