/**
 * Coffeepot JS
 * @author: Coffepot JS
 *
 */

//CONFIGURATION
requirejs.config( {
  urlArgs   : "nocache=" + (new Date).getTime(),
  googlemaps: {
    url   : "https://maps.googleapis.com/maps/api/js",
    params: {
      libraries: "geometry,places",
      v        : "3.exp"
    }
  },
  paths     : {
    cookie : "vendor/js-cookie/src/js.cookie",
    _      : "vendor/lodash-loader/src/main",
    plugins: "vendor/requirejs-plugins/src"
  },
  packages  : [
    {
      name    : "lodash",
      location: "vendor/lodash"
    }
  ]
} );

require( [ "domReady", "bean/console", "bean/grinder" ],
  function ( domReady, console, grinder ) {

    var reciepes = document.querySelectorAll( "[data-coffeepot]" ),
      seen = {},
      indx;

    for ( indx = 0; indx < reciepes.length; ++indx ) {

      var action = grinder( reciepes[indx].getAttribute( "data-coffeepot" ) );

      if ( seen.hasOwnProperty( action.command ) ) {
        return;
      }

      require( [ "drink/" + action.command + "/serve" ] );
    }

  } );

