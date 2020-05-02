const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// get categories
router.get('/', (req, res) => 
  Category.findAll()
    .then(categories => {
      res.send(categories);
    })
    .catch(error => console.log(error))
);

module.exports = router;