const express = require('express');
const router = express.Router();
const Order = require('../models/order');
// const { Op } = require("sequelize");

// get orders
router.get('/', (req, res) => 
  Order.findAll()
    .then(orders => {
      res.send(orders);
    })
    .catch(error => console.log(error))
);

// add an order
router.post('/add', (req,res)=>{
  console.log(req.body)
  let {ARTICULOS, TOTAL, DIRECCION, FECHA_ENTREGA, NOMBRE_CLIENTE, GMAIL_CLIENTE, TELEFONO_CLIENTE} = req.body;
  let errors=[]

  if(!ARTICULOS) {
    errors.push({text:'please add ARTICULOS'});
  }
  if(!TOTAL) {
    errors.push({text:'please add TOTAL'});
  }
  if(!DIRECCION) {
    errors.push({text:'please add DIRECCION'});
  }
  if(!FECHA_ENTREGA) {
    errors.push({text:'please add FECHA_ENTREGA'});
  }
  if(!NOMBRE_CLIENTE) {
    errors.push({text:'please add NOMBRE_CLIENTE'});
  }
  if(!GMAIL_CLIENTE) {
    errors.push({text:'please add GMAIL_CLIENTE'});
  }
  if(!TELEFONO_CLIENTE) {
    errors.push({text:'please add TELEFONO_CLIENTE'});
  }
  if(errors.length > 0) {
    console.log(errors)
  } else {
    // insert into table
    Order.create({
      ARTICULOS,
      TOTAL,
      DIRECCION,
      FECHA_ENTREGA,
      NOMBRE_CLIENTE,
      GMAIL_CLIENTE,
      TELEFONO_CLIENTE
    })
      .then(order => console.log(order))
      .catch(error=>console.log(error))
  }
})
module.exports = router;