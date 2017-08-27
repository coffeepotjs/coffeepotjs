/**
 * Console log
 **/

define( [ "bean/console", "_!map" ], function( console, _ ) {

	"use strict";

	var selector = "[data-coffeepot^=americano]",
		coffees = document.querySelectorAll( selector );

	_.map( coffees, function( elm ) {
		console.log( "seeing this americano " + elm.textContent );
	} );

} );
