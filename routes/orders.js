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
  let {TOTAL, DIRECCION, FECHA_ENTREGA, NOMBRE_CLIENTE, EMAIL_CLIENTE, TELEFONO_CLIENTE} = req.body;
  let errors=[]

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
  if(!EMAIL_CLIENTE) {
    errors.push({text:'please add EMAIL_CLIENTE'});
  }
  if(!TELEFONO_CLIENTE) {
    errors.push({text:'please add TELEFONO_CLIENTE'});
  }
  if(errors.length > 0) {
    console.log(errors)
  } else {
    // insert into table
    Order.create({
      TOTAL,
      DIRECCION,
      FECHA_ENTREGA,
      NOMBRE_CLIENTE,
      EMAIL_CLIENTE,
      TELEFONO_CLIENTE
    })
      .then(order => res.send(order))
      .catch(error=>console.log(error))
  }
})
module.exports = router;