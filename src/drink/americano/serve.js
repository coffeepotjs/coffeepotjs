/**
 * Console log
 **/

define( [ "jquery", "bean/utils" ], function( $, Util ) {

	"use strict";

	var selector = "[data-coffeepot^=americano]",
		coffees = $( selector );

	for ( var indx = 0; indx < coffees.length; indx++ )
	{

		var $elm = coffees.eq( indx ),
			action = Util.parseCommand(  $elm );

		console.log( "seeing this americano " + $elm.text() );

		$elm.addClass( "cp-init" );
	}

} );
