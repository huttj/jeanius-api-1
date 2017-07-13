const Jean = require( '../models' ).Jean;

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
          .catch( error => res.status( 400 ).send( error ));
     },
};
