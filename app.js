const express = require( 'express' );
const logger = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const models = require( './server/models' );
const fillmeup = require( 'fillmeup-sequelize');
const cors = require( 'cors' );
const passport = require( 'passport' );
const FacebookStrategy = require( 'passport-facebook' ).Strategy;

const app = express();

passport.use( new FacebookStrategy({
     clientID: credentials.facebook.app_id,
     clientSecret: credentials.facebook.app_secret,
     callbackURL: credentials.facebook.callback,
     profileFields:[ 'id', 'displayName','provider','emails', 'photos' ]
     },
     function( accessToken, refreshToken, profile, done ) {
          console.log( profile );
          var me = new user({
               provider: profile.provider,
               email: profile.emails[0].value,
               name: profile.displayName,
               photo: profile.photos[0].value,
     });

          user.findOne({email:me.email}, function(err, u) {
               if(!u) {
                    me.save(function(err, me) {
                         if(err) return done(err);
                         done(null,me);
                    });
               } else {
                         console.log(u);
                         done(null, u);
               }
          });
     }
));

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
