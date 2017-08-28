/**
 * Console log
 **/

define( [ "jquery", "bean/utils", "morris" ], function( $, utils,  Morris ) {

	"use strict";

	var selector = "[data-coffeepot^=macchiato]",
		coffees = document.querySelectorAll( selector );

	/**
	 * Init loop to all nodes
	 * @init
	 */

	for ( var idx = coffees.length; idx >= 0; idx-- ) {
		var $elm = $( coffees[ idx ] ),
			id = utils.getId(),
			action = utils.parseCommand( $elm ),
			config = { hideHover: true, resize: true, type: "Line" };

		if ( action.options )
		{
			$.extend( true, config, $elm.data( "coffeepot-options" ) );
		}

		var data = [],
			labels = [];

		// Lets get the labels;

		$elm.find( "tr" ).each( function( index, elm ) {

			var $element = $( elm ),
				series = "-",
				dataset = {};

			if ( index === 0 )
			{

				// We are in the header
				$element.find( "[scope=col]" ).each( function() {
					labels.push( $( this ).text() );
				} );

				return true;
			}

			$element.children().each( function() {
				var $node = $( this );

				if ( $node.attr( "scope" ) === "row" )
				{
					dataset.y = $node.text();

					return true;
				}

				series = ( series === "-" ) ? "a" : String.fromCharCode( series .charCodeAt() + 1 );
				dataset[ series ] = $node.text();
			} );

			data.push( dataset );

		} );

		if ( config.type === "Donut" )
		{

			return new Morris[ config.type ]( {

				// ID of the element in which to draw the chart.
				element: id,

				// Chart data records -- each entry in this array corresponds to a point on
				// the chart.
				data: data.map( function( obj ) {
					return {
						label: obj[ Object.keys( obj )[ 0 ] ],
						value: obj[ Object.keys( obj )[ 1 ] ]
					};
				} ),

				hideHover: true
			} );
		}

		$elm.wrap( "<figure><figcaption></figcaption></figure>" );
		$elm.parent().before( "<div class=\"cp-chart\" id=\"" +  id + "\"></div>" );
		$elm.wrap( "<details></details>" );
		$elm.before( "<summary>" + $elm.find( "caption" ).text() + "</summary>" );

		// Call Morris
		return new Morris[ config.type ]( {

			// ID of the element in which to draw the chart.
			element: id,

			// Chart data records -- each entry in this array corresponds to a point on
			// the chart.
			data: data,

			// The name of the data record attribute that contains x-values.
			xkey: Object.keys( data[ 0 ] )[ 0 ],

			// A list of names of data record attributes that contain y-values.
			ykeys: Object.keys( data[ 0 ] ).slice( 1 ),

			// Labels for the ykeys -- will be displayed when you hover over the
			// chart.
			labels: labels,

			axes: axes,

			hideHover: true
		} );

	};

} );
