const Sequelize = require('sequelize');

function createReview( db ) {
     const Review = db.define('review', {
          original: {
               type: Sequelize.TEXT,
               allowNull: false,
          },
          size: {
               type: Sequelize.INTEGER,
               allowNull: false,
          },
          rating: {
               type: Sequelize.INTEGER,
               allowNull: false,
          },
          height: {
               type: Sequelize.INTEGER,
               allowNull: false,
               defaultValue: 0,
          },
          weight: {
               type: Sequelize.INTEGER,
               allowNull: false,
               defaultValue: 0,
          },
          shape: {
               type: Sequelize.INTEGER,
               allowNull: false,
               defaultValue: 0,
          },
          inseam: Sequelize.STRING,
          date_submitted: Sequelize.STRING,
     });

     Review.associate = models => {
          Review.belongsTo(models.Jean, {
               foreignKey: 'jean_asin',
               targetKey: 'asin',
               onDelete: 'CASCADE',
          })
     }

     return Review;
}

createReview.associate = function ( db ) {
     db.Review.belongsTo( db.Jean );
};

module.exports = createReview;
