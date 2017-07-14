const Jean = require( '../models' ).Jean;
const Review = require( '../models' ).Review;

module.exports = {
     create(req, res) {
          return Jean
          .create({
               asin: req.body.asin,
               url: req.body.url,
               image_url_small: req.body.image_url_small,
               image_url_large: req.body.image_url_large,
               brand: req.body.brand,
               name: req.body.name,
               review_url: req.body.review_url,
               price: req.body.price,
               ratings_avg: req.body.ratings_avg,
               ratings_total: req.body.ratings_total,
               description: req.body.description,
          })
          .then( jean => res.status( 201 ).send( jean ))
          .catch( error => res.status( 400 ).send( error.toString() ));
     },

     index( req, res ) {
          return Jean
          .findAll({ include: [ Review ] })
          .then( jeans => res.send( jeans ))
          .catch( error => res.status( 400 ).send( error.toString() ));
     },

     show( req, res ) {
          return Jean
          .findById(req.params.asin, {
               include: [ Review ],
          })
          .then( jean => {
               if ( !jean ) {
                    return res.status(404).send({
                         message: 'Damn. We haven\'t that pair of jeans.',
                    });
               }
               return res.status(200).send( jean );
               })
               .catch(error => res.status(400).send( error.toString() ));
     },

     update( req, res ) {
          return Jean
          .findById(req.params.asin, {
               include: [ Review ],
          })
          .then( jean => {
               if ( !jean ) {
                    return res.status(404).send({
                         message: 'Damn. We haven\'t that pair of jeans.',
                    });
               }
               return jean
               .update( req.body, { fields: Object.keys(req.body) })
               .then(() => res.status( 200 ).send( jean ))
               .catch(( error ) => res.status( 400 ).send( error ));
               })
          .catch(( error ) => res.status( 400 ).send( error.toString() ));
     },

     destroy( req, res ) {
          return Jean
          .findById(req.params.asin, {
               include: [ Review ],
          })
          .then( jean => {
               if ( !jean ) {
                    return res.status( 400 ).send({
                         message: 'Damn. We haven\'t that pair of jeans.',
                    });
          }
          return jean
          .destroy()
          .then(() => res.status(200).send({ message: 'The offending pair of jeans has been destroyed.' }))
          .catch(error => res.status( 400 ).send( error.toString() ));
          })
          .catch(error => res.status( 400 ).send( error.toString() ));
     },
};
