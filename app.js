const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const models = require( './server/models' );
const fillmeup = require( 'fillmeup-sequelize');
const cors = require('cors');

const app = express();

app.use(cors());

app.use( logger( 'dev' ));

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('*', ( req, res ) => res.status( 200 ).send({
     message: 'Online jean shopping that\'s not a pain in the ass. Jeanius.',
}));

module.exports = app;
