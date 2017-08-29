/**
 * Console log
 **/

define( [ "jquery", "bean/utils" ], function( $, Util ) {

	"use strict";

	var selector = "[data-coffeepot^=americano]",
		order = $( selector );

	for ( var item = 0; item < order.length; item++ )
	{

		var $elm = order.eq( item ),
			action = Util.parseCommand(  $elm );


		$elm.addClass( "cp-init" );
	}

	function get( url, options )
	{

		$.ajax( {
			type: "GET",
			url: $( "object[data]" ).first().attr( "data" ),
			cache: false,
			dataType: "xml",
			success: function( xml ) {
				$( xml ).find( "entry" ).each( function() {
					var entry = $( this );
					console.log( "=====================" );
					console.log( entry.find( "title" ).text() );
					console.log( "=====================" );
				} );
			}
		} );
	}






} );
