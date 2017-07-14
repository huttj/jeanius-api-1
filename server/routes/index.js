const jeansController = require( '../controllers' ).jeans;
const reviewsController = require( '../controllers' ).reviews;

module.exports = ( app ) => {
     app.get( '/api', ( req, res ) => res.status( 200 ).send({
          message: 'Welcome to the most Jeanius API on the interwebs.',
     }));

     app.post( '/api/jeans', jeansController.create );
     app.post( '/api/jeans/:jeanAsin/reviews', reviewsController.create );

     app.get( '/api/jeans/:asin', jeansController.show );
     app.get( '/api/jeans', jeansController.index );
     app.post( '/api/jeans', jeansController.create );
     app.put( '/api/jeans/:asin', jeansController.update );
     app.delete( '/api/jeans/:asin', jeansController.destroy );

};
