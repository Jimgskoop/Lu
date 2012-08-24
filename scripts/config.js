( function() {

  var PATH_TO_LU_COMPONENTS = '/scripts/components/',
    PATH_TO_FIBER = '/scripts/libraries/fiber.js';

  if( typeof window.require === 'function' ) {

    if( typeof window.Inject.addRule === 'function' ) {
      window.Inject.addRule( /^lu\//, {
        path: function( module ) {
          module = module.replace( 'lu/', '' );
          return PATH_TO_LU_COMPONENTS + module + '.js';
        }
      } );

      window.Inject.addRule( 'Fiber', {
        path: PATH_TO_FIBER
      } );
    }
  }

} () );