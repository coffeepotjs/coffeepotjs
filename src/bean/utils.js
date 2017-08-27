/**
 * Console log
 **/

define( [ "jquery" ], function( $ ) {

	return {

		capitalizeFirstLetter: function( string ) {
			return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
		},

		parseCommand: function( elm ) {

			var $elm = $( $elm ),
				params = $elm.data( "coffeepot" ).split( "@" ),
				command = params[ 0 ],
				selector = params[ 1 ],
				options = ( $elm.attr( "data-coffeepot-parameters" ) ) ? $elm.data( "coffeepot-parameters" ) : false;

			return {
				command: command,
				selector: selector,
				options: options
			};
		}
	};
} );

