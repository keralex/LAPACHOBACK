const Sequalize = require('sequelize');
const db = require('../config/sequalize')

const User = db.define('User', {
  name: {
    type: Sequalize.STRING
  },
  email: {
    type: Sequalize.STRING
  },
  password: {
    type: Sequalize.STRING
  },
  dni: {
    type: Sequalize.INTEGER
  },
  phone: {
    type: Sequalize.INTEGER
  },
  domicilio: {
    type: Sequalize.STRING
  },
},
{
  tableName: 'Users',
  timestamps: false           // this will deactivate the timestamp columns
})
User.sync()

module.exports = User;