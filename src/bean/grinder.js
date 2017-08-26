/**
 * Console log
 **/

define( function () {

  return function ( attr ) {
    var parameters = attr.split( "@" );

    return {
      command : parameters.shift(),
      selector: parameters.shift(),
      options : parameters
    };
  };

} );