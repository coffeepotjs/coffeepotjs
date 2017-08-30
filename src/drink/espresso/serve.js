/**
 * Console log
 **/

define( [ "jquery", "bean/utils" ], function( $, Util ) {

	"use strict";

	var selector = "[data-coffeepot^=americano]",
        defaults = { type: "GET", cache: false, datatype: "xml" },
        canvas = ".cp-canvas",
		order = $( selector );


	var formats = [
	  function ( xml ) { }
    ];

        /*type: "GET",
    url: url,
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
}*/
function get( options )
    {
        var settings = $.extend( {}, defaults, options );
        $.ajax( settings );
    }

	// Main
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
