const Sequalize = require('sequelize');
const db = require('../config/sequalize')

const orderItem = db.define('pedidos_det', {
  IDPEDIDO: {
    type: Sequalize.INTEGER
  },
  PRODID: {
    type: Sequalize.STRING
  },
  ARTICULO: {
    type: Sequalize.CHAR
  },
  PRECVTA1: {
    type: Sequalize.DOUBLE
  },
  QUANTITY: {
    type: Sequalize.INTEGER
  },
},
  {
    tableName: 'pedidos_det',
    timestamps: true           // this will deactivate the timestamp columns
  }
)
orderItem.sync()

module.exports = orderItem;