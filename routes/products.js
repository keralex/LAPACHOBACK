const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// get products
router.get('/', (req, res) => 
  Product.findAll({limit:10})
    .then(products => {
      res.send(products);
    })
    .catch(error => console.log(error))
);
// get products by categorie
router.get('/byCategory', (req, res) => {
  let {category} = req.query
  Product.findAll({where: {
    RUBRO: category
  }})
    .then(products => {
      res.send(products);
    })
    .catch(error => console.log(error))
}
);
module.exports = router;