var Class = li.require( 'libraries/ptclass' ),
  Abstract = li.require( 'ui/Abstract' ),
  Button;

/**
 * Representation of a button element
 * @class Button
 * @constructor
 * @extends Abstract
 * @param {HTMLElement} element The HTML element surrounded by the control
 * @param {Object} settings Configuration properties for this instance
 * @requires ptclass, Abstract
 */ 
Button = Class.create( Abstract, ( (function(){

  // Private Static Attributes

  /**
   * Default configuration values
   * @property defaults
   * @type Object
   * @private
   * @final
   */
   var defaults = {
     on: 'click'
   };

  // Return methods object
  return {
    /**
     * PTClass constructor 
     * @method initialize
     * @public
     * @param {Object} $super Pointer to superclass constructor
     * @param {Object} $element JQuery object for the element wrapped by the component
     * @param {Object} settings Configuration settings
     */    
    initialize: function ( $super, $element, settings ){
      
      // Private Attributes
      
      /**
       * Instance of Button
       * @property Button
       * @type Object
       * @private
       */
      var Button = this,
      /**
       * Custom event name
       * @property action
       * @type Object
       * @private
       */
      action,
      /**
       * Target item used in event data
       * @property action
       * @type Object
       * @private
       */
      item;
      
      // Mix the defaults into the settings values
      _.defaults( settings, defaults );

      // Try to figure out what to select...
      if( action === 'select' ) {
        if( settings.item ) {
          item = ( typeof settings.item === 'number' ) ? settings.item : $( settings.item );
        } else {
          item = $( 'li', $element.closest( 'ul, ol' ) ).index( $element.closest( 'li' )[ 0 ] );
        }
      }

      action = settings.action;
      
      // Call the parent constructor
      $super( $element, settings );

      // Event bindings
      $element.on( settings.on, function ( event ) {
        if( item ) {
          Button.trigger( action, [ item ] );
          _.log("Button " + action);
        } else {
          Button.trigger( action );
          _.log("Button " + action);
        }
      } );
    } 
  };
})() ));

if ( typeof module !== 'undefined' && module.exports ) {
  module.exports = Button;
}

