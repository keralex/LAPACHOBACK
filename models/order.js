const Sequalize = require('sequelize');
const db = require('../config/sequalize')

const order = db.define('pedidos', {
  TOTAL: {
    type: Sequalize.DOUBLE
  },
  DIRECCION: {
    type: Sequalize.CHAR
  },
  FECHA_ENTREGA: {
    type: Sequalize.CHAR
  },
  NOMBRE_CLIENTE: {
    type: Sequalize.CHAR
  },
  EMAIL_CLIENTE: {
    type: Sequalize.CHAR
  },
  TELEFONO_CLIENTE: {
    type: Sequalize.CHAR
  },
},
  {
    tableName: 'pedidos',
    timestamps: true           // this will deactivate the timestamp columns
  }
)
order.sync()

module.exports = order;