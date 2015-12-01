var Nucleotides = {
  count: function ( string, nucleotide ) {
    string = string.toUpperCase();
    nucleotide = nucleotide.toUpperCase();
    var nucleotideCount = 0;

    for ( var i = 0; i < string.length; i++ ) {
      var character = string[i];
      if ( character === nucleotide ) {
        nucleotideCount += 1;
      }
    }

    return nucleotideCount;
  },

  countAll: function ( string ) {
    // var aCount = Nucleotides.count( string, "A" );
    // var cCount = Nucleotides.count( string, "C" );
    // var tCount = Nucleotides.count( string, "T" );
    // var gCount = Nucleotides.count( string, "G" );

    return {
      "A" : Nucleotides.count( string, "A" ),
      "C" : Nucleotides.count( string, "C" ),
      "T" : Nucleotides.count( string, "T" ),
      "G" : Nucleotides.count( string, "G" )
    };
  }

};

Nucleotides.count( "ATCGATCTTTG", "T" );