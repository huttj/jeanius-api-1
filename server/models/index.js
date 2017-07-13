const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

const db = {};

if ( config.use_env_variable ) {
     db.sequelize = new Sequelize( process.env[config.use_env_variable]
     );
} else {

     db.sequelize = new Sequelize(
          config.database, config.username, config.password, config
     );

db.sequelize.sync();

module.exports = db;
