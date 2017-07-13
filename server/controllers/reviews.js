const Review = require('../models').Review;

     module.exports = {
          create( req, res ) {
               return Review
               .create({
                    original: req.body.original,
                    size: req.body.size,
                    rating: req.body.rating,
                    height: req.body.height,
                    weight: req.body.weight,
                    shape: req.body.shape,
                    inseam: req.body.inseam,
                    jeanAsin: req.params.jeanAsin,
               })
               .then( review => res.status( 201 ).send( review ))
               .catch( error => res.status( 400 ).send( error ));
           },
         };
