const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idvalidator = require ('mongoose-id-validator');

const ProductS = new Schema({
  name: {
    type: String,
    required: [true, 'Review field is required']
  }
});

ProductS.plugin(idvalidator);

const Product = mongoose.model('product', ProductS);

module.exports = Product;
