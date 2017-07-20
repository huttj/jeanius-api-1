const Sequelize = require('sequelize');
var createUser = db => {
     const User = db.define('user', {
          email: {
               type: Sequelize.STRING,
               primaryKey: true,
               allowNull: false,
          },
          provider: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          name: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          photo: {
               type: Sequelize.STRING,
               allowNull: false,
          },
     });

     return User;
}

module.exports = createUser;
