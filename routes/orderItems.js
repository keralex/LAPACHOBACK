const express = require('express');
const router = express.Router();
const OrderItem = require('../models/orderItem');
// const { Op } = require("sequelize");

// get orders
router.get('/', (req, res) => 
  OrderItem.findAll()
    .then(OrderItem => {
      res.send(OrderItem);
    })
    .catch(error => console.log(error))
);

// add an OrderItem
router.post('/add', (req,res)=>{
  console.log(req.body)
  let {IDPEDIDO, PRODID, ARTICULO, PRECVTA1, QUANTITY} = req.body;
  let errors=[]
  if(!IDPEDIDO) {
    errors.push({text:'please add IDPEDIDO'});
  }
  if(!PRODID) {
    errors.push({text:'please add PRODID'});
  }
  if(!ARTICULO) {
    errors.push({text:'please add ARTICULO'});
  }
  if(!PRECVTA1) {
    errors.push({text:'please add PRECVTA1'});
  }
  if(!QUANTITY) {
    errors.push({text:'please add QUANTITY'});
  }

  if(errors.length > 0) {
    console.log(errors)
  } else {
    // insert into table
    OrderItem.create({
      IDPEDIDO,
      PRODID,
      ARTICULO,
      PRECVTA1, 
      QUANTITY
    })
      .then(order =>res.send(order))
      .catch(error=>res.send(error))
  }
})
module.exports = router;