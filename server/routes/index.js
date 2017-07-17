const jeansController = require( '../controllers' ).jeans;
const reviewsController = require( '../controllers' ).reviews;

module.exports = ( app ) => {
     app.get( '/api', ( req, res ) => res.status( 200 ).send({
          message: 'Welcome to the most Jeanius API on the interwebs.',
     }));

          // app.get( '/api/recommendations', reviewsController.query );
     app.get( '/api/reviews/:id', reviewsController.show );
     app.get( '/api/reviews', reviewsController.index );
     app.post( '/api/jeans/:jeanAsin/reviews', reviewsController.create );
     app.put( '/api/reviews/:id', reviewsController.update );
     app.delete( '/api/reviews/:id', reviewsController.destroy );

     app.get( '/api/jeans/:asin', jeansController.show );
     app.get( '/api/jeans', jeansController.index );
     app.post( '/api/jeans', jeansController.create );
     app.put( '/api/jeans/:asin', jeansController.update );
     app.delete( '/api/jeans/:asin', jeansController.destroy );

};
