const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { Op } = require("sequelize");

// get products
router.get('/', (req, res) => 
  Product.findAll({
    limit:100,
    where: {
      STOCK: {
        [Op.gte]: 150
      }
    },
    order: [
      ['ARTICULO', 'ASC'],
    ],

  })
    .then(products => {
      res.send(products);
    })
    .catch(error => console.log(error))
);
// get products by categorie
router.get('/byCategory', (req, res) => {
  let {category} = req.query
  Product.findAll({
    where: {
      RUBRO: category,
      STOCK: {
        [Op.gte]: 100
      }
    },
    order: [
      ['ARTICULO', 'ASC'],
    ],
  })
    .then(products => {
      res.send(products);
    })
    .catch(error => console.log(error))
}
);
router.get('/byName', (req, res) => {
  let {name} = req.query

  Product.findAll({
    where: {
      ARTICULO: {
        [Op.like] : name + '%'
      },
      STOCK: {
        [Op.gte]: 150
      }
    },
    order: [
      ['ARTICULO', 'ASC'],
    ],
  })
    .then(products => {
      res.send(products);
    })
    .catch(error => console.log(error))
}
);
module.exports = router;