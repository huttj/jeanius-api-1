const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

const createJean = require('./jean');
const createReview = require('./review');

const db = {};

if ( config.use_env_variable ) {
     db.sequelize = new Sequelize( process.env[config.use_env_variable]
     );
} else {
     db.sequelize = new Sequelize(
          config.database, config.username, config.password, config
     );
}

db.Jean = createJean(db.sequelize);
db.Review = createReview(db.sequelize);

db.Jean.associate(db);
db.Review.associate(db);

db.sequelize.sync();

module.exports = db;
