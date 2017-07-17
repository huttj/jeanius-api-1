import axios from 'axios';

var reviews = [
     {
          'asin': '1', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 5, 'photos': ['url','url', 'url']
     },
     {
          'asin': '2', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '3', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '4', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '4', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '3', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '1', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 5, 'photos': ['url','url', 'url']
     },
     {
          'asin': '2', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '3', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '4', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '3', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '5', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '6', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '7', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '8', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '5', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '6', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '7', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '8', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '6', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '7', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '7', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '8', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '9', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '10', 'size': '4', 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '11', 'size': '2', 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '12', 'size': '4', 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '13', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '14', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '15', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '16', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '17', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '18', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 125, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '6', 'size': 6, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 60, 'weight': 130, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '7', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 65, 'weight': 128, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '7', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 61, 'weight': 130, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '8', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 64, 'weight': 128, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '9', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 59, 'weight': 130, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '10', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 68, 'weight': 128, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '11', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 60, 'weight': 128, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '12', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 58, 'weight': 128, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '19', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 124, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '20', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 62, 'weight': 126, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '21', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 130, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '22', 'size': 2, 'inseam': 31, 'date': '', 'review': '', 'rating': 5,'date': '', 'height': 63, 'weight': 120, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '23', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 139, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '23', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 140, 'shape': 6, 'photos': ['url','url', 'url']
     },
     {
          'asin': '23', 'size': 4, 'inseam': 31, 'date': '', 'review': '', 'rating': 4,'date': '', 'height': 63, 'weight': 141, 'shape': 6, 'photos': ['url','url', 'url']
     },

];

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

var findJeans = ( reviews, rating, stats, determineHeight, determineWeight, determineShape ) => {

     var height = determineHeight( stats.height[0], stats.height[1] );
     var weight = determineWeight( stats.weight[0], stats.weight[1] );
     var shape = determineShape( stats.shape );


     return reviews.filter(( review ) => {
          return review.rating == rating
          && height.includes( review.height )
          && weight.includes( review.weight )
          && shape.includes( review.shape )
     });
};

var groupJeans = foundJeans => {
     console.log(foundJeans.length);
     return foundJeans.reduce(( count, jeans ) => {
          var array = [
               ['asin', jeans.asin],
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

     arrayedJeans.forEach(( jeans ) => {
          scored = ( jeans[0].split(',') );
          scored.push( 'mentions', jeans[1],'stars', jeans[1] * rating );

          if( !numScoredJeans.includes( scored[1] )) {
               numScoredJeans.push( scored[1] )
          }

          var object = {
               'asin': scored[1],
               'size': scored[3],
               'inseam': scored[5],
               'mentions': scored[7],
               'stars': scored[9]
          };

          var index = scoredJeans.findIndex( i =>
               i.asin === object.asin &&
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

module.exports = {
     recommendedJeans: ( stats ) => {
          var foundJeans = [], groupedJeans = [], scoredJeans = [], numScoredJeans = [], sortedJeans = [];

          var rating = 5;

          while ( rating > 3 ) {

               foundJeans = findJeans( reviews, rating, stats, determineHeight, determineWeight, determineShape);
               groupedJeans = groupJeans( foundJeans );
               scoredJeans = scoreJeans( groupedJeans, numScoredJeans, scoredJeans, rating );
               sortedJeans = sortJeans(scoredJeans)

               --rating;
          }
          return sortedJeans;
     }
}
