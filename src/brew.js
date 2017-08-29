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

require( [ "jquery", "bean/utils" ], function( $, Util ) {
	"use strict";

	// Remove no-js header
	$( ":root" ).removeAttr( "class" );

	$( function() {
		var elements = $( "[data-coffeepot]" );

		for ( var indx = 0; indx < elements.length; indx++ )
		{

			var action = Util.parseCommand( elements.eq( indx ) );

			if ( requirejs.s.contexts._.config.loaded.hasOwnProperty( action.command ) )
			{
				console.log( "skipping seen :: " + action.command );
				continue;
			}

			// Lets add this index
			requirejs.s.contexts._.config.loaded[ action.command ] = true;

			console.log( "drink/" + action.command + "/serve" );

			require( [ "drink/" + action.command + "/serve" ] );
		}

	} );


} );
