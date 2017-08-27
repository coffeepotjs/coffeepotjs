/**
 * Console log
 **/

define( function() {

  return function( elm ) {
    var parameters = elm.getAttribute( "data-coffeepot" ).split( "@" );

    return {
      command: parameters.shift(),
      selector: parameters.shift(),
      options: parameters
    };
  };

} );
