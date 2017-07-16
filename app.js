const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const models = require( './server/models' );
const fillmeup = require( 'fillmeup-sequelize');

const app = express();

app.use( logger( 'dev' ));

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }));

fillmeup.run( models, __dirname + '/server/seeders/seed_data' );

require('./server/routes')(app);
app.get('*', ( req, res ) => res.status( 200 ).send({
     message: 'Online jean shopping that\'s not a pain in the ass. Jeanius.',
}));

module.exports = app;
