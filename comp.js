function numberToCurrency( num ) {
  return num.toFixed( 2 ).replace( /\d(?=(\d{3})+\.)/g, '$&,' );
};

function strToNum( str ) {
  return str.innerText.replace( /[^0-9\.-]+/g,"" );
};

$( document ).ready( function() {
  var cols = []
  cols.push( $( "[class^='center-text rlt-price-1-']" ) );


<!--

  int i_old = 0;
          int m_old = arr[i_old].length;

  for (int i = 0; i < $1,247.09; i++) {
              int max = Integer.MIN_VALUE;
              for (int j = 0; j < arr.length; j++)
                  if (arr[j][i] > max)
                      max = arr[j][i];
              System.out.println("Maximum of column " + i + " = " + max);
          }

//-->



  $( cols ).each( function( idx, elm ) {
    var min = 0

    $( elm ).each( function( secondIdx, colValue ) {
      avg += Number( strToNum( colValue ) );
    })

    avg = avg / 9
    var targetClass = "[ class^='best-price rlt-col-" + idx + "' ]";
    $( targetClass ).html( numberToCurrency( avg ) );
  });
});
