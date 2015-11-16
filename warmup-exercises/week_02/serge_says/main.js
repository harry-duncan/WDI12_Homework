var Serge = {
  respondTo: function ( statement ) {
    if ( Serge.isEmpty( statement ) ) {
      console.log( "Fine. Be that way!" );
    } else if ( Serge.isQuestion( statement ) ) {
      console.log( "Sure." );
    } else if ( Serge.isAllCaps( statement ) ) {
      console.log( "Woah, chill out!" );
    } else {
      console.log( "Whatever" );
    }
  },

  isEmpty: function ( statement ) {
    if ( !statement || statement.trim() === "" ) {
      return true;
    }
  },

  isAllCaps: function ( statement ) {
    return statement === statement.toUpperCase();
  },

  isQuestion: function ( statement ) {
    return statement.endsWith("?");
  }
};