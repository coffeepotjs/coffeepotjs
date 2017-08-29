/**
 * Console log
 **/

define( [ "jquery" ], function( $ ) {

	"use strict";

	var seed = 1;

	return {

		getId: function( prefix ) {

			return ( prefix ) ? prefix + "_" + seed++ : "cpid_" + seed++;
		},

		capitalizeFirstLetter: function( string ) {
			return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
		},

		parseCommand: function( $elm ) {

			var params = $elm.attr( "data-coffeepot" ).split( "@" ),
				command = params[ 0 ],
				selector = params[ 1 ],
				options = ( $elm.attr( "data-coffeepot-parameters" ) ) ? $elm.data().coffeeParameters : false;

			return {
				command: command,
				selector: selector,
				options: options
			};
		}



	};
} );

