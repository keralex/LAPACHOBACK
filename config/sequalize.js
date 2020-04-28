const { Sequelize } = require('sequelize');
module.exports = new Sequelize('ellapacho_db', 'root', '123456', {
  dialect: 'mariadb',
  host:'192.168.0.155',
  user: 'root',
  // protocol: null,
  port: 3307,
  // define: {
  //   syncOnAssociation: true,
  //   charset: 'utf8',
  //   collate: 'utf8_general_ci',
  // },
  language: 'es',
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  },
  // dialectOptions: {
    //   // Your mariadb options here
    //   // connectTimeout: 1000
    // }
  });