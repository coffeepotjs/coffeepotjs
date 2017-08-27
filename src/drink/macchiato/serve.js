/**
 * Console log
 **/

define( [ "bean/console", "_!map", "bean/grinder", "morris" ], function( console, _, grinder,  Morris ) {

	"use strict";

	var selector = "[data-coffeepot^=macchiato]",
		coffees = document.querySelectorAll( selector );

	/**
	 * Init loop to all nodes
	 * @init
	 */

	_.map( coffees, function( elm ) {
		var action = grinder( elm );

		Morris.Bar( {
			element: action.selector,
			data: [
				{ y: "2006", a: 100, b: 90 },
				{ y: "2007", a: 75,  b: 65 },
				{ y: "2008", a: 50,  b: 40 },
				{ y: "2009", a: 75,  b: 65 },
				{ y: "2010", a: 50,  b: 40 },
				{ y: "2011", a: 75,  b: 65 },
				{ y: "2012", a: 100, b: 90 }
			],
			xkey: "y",
			ykeys: [ "a", "b" ],
			labels: [ "Series A", "Series B" ]
		} );

		console.log( "seeing this macchiato " + elm.textContent );
	} );

} );
