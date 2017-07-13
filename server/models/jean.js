const Sequelize = require( 'sequelize' );

function createJean( db ) {
     const Jean = db.define( 'jean', {
          asin: {
               type: Sequelize.STRING,
               primaryKey: true,
               allowNull: false,
          },
          url: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          image_url_small: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          image_url_large: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          brand: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          name: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          review_url: {
               type: Sequelize.STRING,
               allowNull: false,
          },
          price: {
               type: Sequelize.DOUBLE,
               allowNull: false,
          },
          ratings_avg: {
               type: Sequelize.DOUBLE,
               allowNull: false,
          },
          ratings_total: {
               type: Sequelize.INTEGER,
               allowNull: false,
          },
          description: Sequelize.TEXT,
          });

     return Jean;

}
createJean.associate = function ( db ) {
     db.Jean.hasMany( db.Review, { onDelete: 'CASCADE' } );
};

module.exports = createJean;
