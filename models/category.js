const Sequalize = require('sequelize');
const db = require('../config/sequalize')

const category = db.define('rubros', {
  ITEMNOM: {
    type: Sequalize.STRING
  }},
  {
    tableName: 'rubros',
    timestamps: false           // this will deactivate the timestamp columns
  }
)
category.sync()

module.exports = category;