const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

// Get all products
router.get('/products', function (req, res, next) {
  Product.find({}).then(function (product) {
    res.send(product);
  }).catch(next);
});

// Get product by ID
router.get('/products/:id', function (req, res, next) {
  Product.findById({_id: req.params.id}).then(function (product) {
    res.send(product);
  }).catch(next);
});

// Add new product
router.post('/products', function (req, res,next) {
  Product.create(req.body).then(function (product) {
    res.send(product);
  }).catch(next);
});

// Add new review
router.post('/reviews', function (req, res, next) {
  Review.create(req.body).then(function (review) {
    res.send(review);
  }).catch(next);
});

// Get review by productID
router.get('/products/:id/reviews', function (req, res, next) {
  Review.find({productId: req.params.id}).then(function (review) {
    res.send(review);
  }).catch(next);
});

module.exports = router;
