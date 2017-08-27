/**
 * Console log
 **/

define( [ "jquery", "bean/utils", "morris" ], function( $, utils,  Morris ) {

	"use strict";

	var selector = "[data-coffeepot^=macchiato]",
		coffees = $( selector );

	/**
	 * Init loop to all nodes
	 * @init
	 */

	for (var idx = coffees.length; idx >= 0; idx--) {
		var $elm = coffees[idx],
			config = { hideHover: true, resize: true };



		Morris[ action.options.upperFirst ]
	};


	for (var idx = graphs.length; idx >= 0; idx--) {
		var properties = graphs[idx];
		Morris[ properties.type ]( properties.config )
	};

	_.map( coffees, function( elm ) {
		var action = grinder( elm ),
			elements = $( action.selector );


		Morris.Bar( {
			element: ,
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
