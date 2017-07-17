const models = require( '../models' );
const fillmeup = require( 'fillmeup-sequelize' );

fillmeup
     .run( models, __dirname + "/seed_data" )
     .then(() => {
          models.sequelize.close();
})
.catch(( error ) => {
     console.log( error );
     models.sequelize.close();
})
