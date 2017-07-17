const Review = require('../models').Review;
const Jean = require('../models').Jean;
const recommendJeans = require('../algorithms/recommender');


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
               jean_asin: req.params.jeanAsin,
          })
          .then( review => res.status( 201 ).send( review ))
          .catch( error => res.status( 400 ).send( error ));
     },

     query( req, res ) {
          const stats = {};
          stats.height = req.query.height
          stats.heightPriority = req.query.heightPriority;
          stats.weight = req.query.weight
          stats.weightPriority = req.query.weightPriority;
          stats.shape = req.query.shape;
          return Review
          .findAll({ include: [Jean] })
          .then( reviews => res.send( recommendJeans( stats, reviews )))
          .catch( error => res.status(400).send(error.toString() ));
     },

     index( req, res ) {
          return Review
          .findAll({ include: [ Jean ] })
          .then( reviews => res.send( reviews ))
          .catch( error => res.status( 400 ).send( error.toString() ));
     },

     show( req, res ) {
          return Review
          .findById(req.params.id, {
               include: [ Jean ],
          })
          .then( review => {
               if ( !review ) {
                    return res.status(404).send({
                         message: 'Damn. We haven\'t that review.',
                    });
               }
               return res.status(200).send( review );
               })
               .catch(error => res.status(400).send( error.toString() ));
     },

     update( req, res ) {
          return Review
          .findById(req.params.id, {
               include: [ Jean ],
          })
          .then( review => {
               if ( !review ) {
                    return res.status(404).send({
                         message: 'Damn. We haven\'t that review.',
                    });
               }
               return review
               .update( req.body, { fields: Object.keys(req.body) })
               .then(() => res.status( 200 ).send( review ))
               .catch(( error ) => res.status( 400 ).send( error ));
               })
          .catch(( error ) => res.status( 400 ).send( error.toString() ));
     },

     destroy( req, res ) {
          return Review
          .findById(req.params.id, {
               include: [ Jean ],
          })
          .then( review => {
               if ( !review ) {
                    return res.status( 400 ).send({
                         message: 'Damn. We haven\'t that review.',
                    });
          }
          return review
          .destroy()
          .then(() => res.status(200).send({ message: 'The offending review has been destroyed.' }))
          .catch(error => res.status( 400 ).send( error.toString() ));
          })
          .catch(error => res.status( 400 ).send( error.toString() ));
     },
};
