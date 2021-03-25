require('dotenv').config()

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database":  process.env.DB_DATABASE,
  "host":  process.env.DB_HOST,
  // "port": 8889, //excluir
  "dialect": "mysql",
  "define": {
    "timestamps": false,
    "underscored": true,
    "underscoredAll": true,
  }
};