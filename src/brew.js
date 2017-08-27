/**
 * Coffeepot JS
 * @author: Coffepot JS
 *
 */

//CONFIGURATION
requirejs.config( {
    googlemaps: {
        url: "https://maps.googleapis.com/maps/api/js",
        params: {
            libraries: "geometry,places",
            v: "3.exp"
        }
    },

	shim: {
		"morris": {
			"deps": [ "jquery", "raphael", "text!vendor/morris/morris.css" ],
			exports: "Morris",
			init: function( $, Raphael ) {
				window.Raphael = Raphael;
			}
		}
	},

    paths: {
        "cookie": "vendor/js-cookie/src/js.cookie",
        "_": "vendor/lodash-loader/src/main",
        "plugins": "vendor/requirejs-plugins/src",
		"jquery": "vendor/jquery/jquery",
		"morris": "vendor/morris/morris",
		"raphael": "vendor/raphael/raphael.min"
    },

    config: {
        _: { devOptimizedLoad: true }
    },

    loaded: {},

    packages: [
        {
            name: "lodash",
            location: "vendor/lodash"
        }
    ]
} );

require( [ "jquery", "bean/grinder", "_!map" ],
    function( $, grinder, _ ) {

		"use strict";

		$( function() {
		_.map( document.querySelectorAll( "[data-coffeepot]" ),
				function( elm ) {

					var action = grinder( elm );
					if ( requirejs.s.contexts._.config.loaded.hasOwnProperty( action.command ) ) {
						return true;
					}

					// Lets add this index
					requirejs.s.contexts._.config.loaded[ action.command ] = true;

					return require( [ "drink/" + action.command + "/serve" ] );

				} );
		} );

    } );
