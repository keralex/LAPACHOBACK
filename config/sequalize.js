const { Sequelize } = require('sequelize');
module.exports = new Sequelize('ellapacho_db', 'ellapacho_root', 'tms2620sql', {
  dialect: 'mariadb',
  host:'167.250.5.60',
  user: 'ellapacho_root',
  // protocol: null,
  port: 3306,
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