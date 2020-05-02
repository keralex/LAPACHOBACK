const Sequalize = require('sequelize');
const db = require('../config/sequalize')

const product = db.define('LSTPRECIOS', {
  ID: {
    type: Sequalize.INTEGER
  },
  PRODID: {
    type: Sequalize.CHAR
  },
  RUBRO: {
    type: Sequalize.CHAR
  },
  ARTICULO: {
    type: Sequalize.CHAR
  },
  STOCK: {
    type: Sequalize.INTEGER
  },
  STKCRITICO: {
    type: Sequalize.INTEGER
  },
  PRECVTA1: {
    type: Sequalize.DOUBLE
  },
  PORCIVA1: {
    type: Sequalize.DOUBLE
  },
  RUTA_IMG: {
    type: Sequalize.CHAR
  },
},
  {
    tableName: 'LSTPRECIOS',
    timestamps: false           // this will deactivate the timestamp columns
  }
)
product.sync()

module.exports = product;