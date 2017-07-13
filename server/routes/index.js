const jeansController = require( '../controllers' ).jeans;
const reviewsController = require( '../controllers' ).reviews;

module.exports = ( app ) => {
     app.get( '/api', ( req, res ) => res.status( 200 ).send({
          message: 'Welcome to the most Jeanius API on the interwebs.',
     }));

     app.post( '/api/jeans', jeansController.create );
};
