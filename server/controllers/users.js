const User = require( '../models' ).User;

module.exports = {
     create(req, res) {
          // somehow send user to app.get('/auth/facebook', passport.authenticate( ‘facebook ‘).
          // somehow a bundle returns.
          return User
          .new({
               provider: req.profile.provider,
               email: req.profile.emails[0].value,
               name: req.profile.displayName,
               photo: req.profile.photos[0].value,
          })
          .then( jean => res.status( 201 ).send( jean ))
          .catch( error => res.status( 400 ).send( error.toString() ));
     },
};
