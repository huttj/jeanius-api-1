const models = require( '../models' );
const fillmeup = require( 'fillmeup-sequelize' );

fillmeup.run(models, __dirname + "./seed_data");
