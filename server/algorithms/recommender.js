const Review = require('../models').Review;
const Jean = require('../models').Jean;

var determineHeight = ( priority, height ) => {
     var heightRange = [];
     var length = 0;
     var start = 0;
     var range = 0;

     switch ( priority ) {
          case 0:
               heightRange.push( height, height )
               break;
          case 1:
               heightRange.push( height - 1, height + 1 )
               break;
          case 2:
               heightRange.push( height - 3, height + 3 )
               break;
          case 3:
               heightRange.push( height - 5, height + 5 )
               break;
          case 4:
               heightRange.push( 0, 1000 )
               break;
     }

     length = heightRange[1] - heightRange[0];
     start = heightRange[0]

     return range = Array.from(new Array( length + 1 ), ( x,i ) => i + start)
};

var determineWeight = ( priority, weight ) =>  {
     var weightRange = [];
     var length = 0;
     var start = 0;
     var range = 0;

     switch ( priority ) {
          case 0:
               weightRange.push( weight, weight )
               break;
          case 1:
               weightRange.push( weight - 5, weight + 5 )
               break;
          case 2:
               weightRange.push( weight - 10, weight + 10 )
               break;
          case 3:
               weightRange.push( weight - 15, weight + 15 )
               break;
          case 4:
               weightRange.push( 0, 1000 )
               break;
     }

     length = weightRange[1] - weightRange[0];
     start = weightRange[0]
     return range = Array.from(new Array( length + 1 ), ( x,i ) => i + start);
};

var determineShape = ( shape ) =>  {
     var shapeRange = [];
     var length = 0;
     var start = 0;
     var range = 0;

     if ( shape === 0 ) {
          shapeRange.push( 1, 6 )
     } else {
          shapeRange.push( shape, shape )
     }

     length = shapeRange[1] - shapeRange[0];
     start = shapeRange[0]
     return range = Array.from(new Array( length + 1 ), ( x,i ) => i + start);
};

var findJeans = ( queriedReviews, rating, stats, determineHeight, determineWeight, determineShape ) => {

     var height = determineHeight( parseInt( stats.heightPriority ), parseInt( stats.height ));
     var weight = determineWeight( parseInt( stats.weightPriority ), parseInt( stats.weight ));
     var shape = determineShape( parseInt( stats.shape ))

     return queriedReviews.filter(( queriedReview ) => {
          return queriedReview.rating == rating
          && height.includes( queriedReview.height )
          && weight.includes( queriedReview.weight )
          && shape.includes( queriedReview.shape )
     });
};

var groupJeans = foundJeans => {
     return foundJeans.reduce(( count, jeans ) => {
          var array = [
               ['jean_asin', jeans.jean_asin],
               ['size', jeans.size],
               ['inseam', jeans.inseam]
          ];

          count[array] = (count[array] || 0) + 1;
          return count;
     }, {});
};

var scoreJeans = ( groupedJeans, numScoredJeans, scoredJeans, rating ) => {
     var arrayedJeans = Object.entries( groupedJeans );
     var scored = [];

     arrayedJeans.forEach( jeans  => {
          scored = ( jeans[0].split(',') );
          scored.push( 'mentions', jeans[1],'stars', jeans[1] * rating );

          if( !numScoredJeans.includes( scored[1] )) {
               numScoredJeans.push( scored[1] )
          }

          var object = {
               'jean_asin': scored[1],
               'size': scored[3],
               'inseam': scored[5],
               'mentions': scored[7],
               'stars': scored[9]
          };

          var index = scoredJeans.findIndex( i =>
               i.jean_asin === object.jean_asin &&
               i.size === object.size &&
               i.inseam === object.inseam
          );

          if ( index === -1 ) {
               scoredJeans.push(object)
          } else {
               ++scoredJeans[index].mentions;
               scoredJeans[index].stars = scoredJeans[index].stars + object.stars;
          }
     });
     return scoredJeans;
}

var sortJeans = scoredJeans => {
     return scoredJeans.sort(( a, b ) => {
          return (b.stars * b.mentions) - (a.stars * a.mentions);
     });
}

var recommendJeans = ( stats, reviews ) => {
     var queriedReviews = [], foundJeans = [], groupedJeans = [], scoredJeans = [], numScoredJeans = [], sortedJeans = [], recommendedJeans = [];
     var rating = 5;

     for ( var i = 0; i < reviews.length; i++ ) {
          queriedReviews.push(reviews[i]['dataValues'])
     }

     while ( rating > 3 ) {

          foundJeans = findJeans( queriedReviews, rating, stats, determineHeight, determineWeight, determineShape);
          groupedJeans = groupJeans( foundJeans );
          scoredJeans = scoreJeans( groupedJeans, numScoredJeans, scoredJeans, rating );
          sortedJeans = sortJeans(scoredJeans)

          --rating;
     }

     recommendedJeans = sortedJeans.forEach( sortedJean  => {
          return Jean
          .findById( sortedJean.jean_asin, {
               include: [ Review ],
          })
          .then( jean => {
               return jean })
     });

     return recommendedJeans;
}

module.exports = recommendJeans;
