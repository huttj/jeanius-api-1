const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );

const app = express();

app.use(logger( 'dev' ));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', ( req, res ) => res.status( 200 ).send({
     message: 'Online jean shopping that\'s not a pain in the ass. Jeanius.',
}));

module.exports = app;
