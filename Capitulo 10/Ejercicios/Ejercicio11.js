// Ejercicio 10.11: Ejercicio10_11.js

function ejecutarCuentas()
{
   var cuentas = [5, 12, 8, 20, 15, 30, 42, 9, 11, 7]; // Arreglo inicial
   
   // a) Establecer los 10 elementos del arreglo cuentas en ceros
   for ( var i = 0; i < cuentas.length; ++i )
   {
      cuentas[ i ] = 0;
   }

   document.getElementById( "resCuentas" ).innerHTML = 
      "Arreglo 'cuentas' reiniciado: [" + cuentas.join( ", " ) + "]";
}

function ejecutarBono()
{
   var bono = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

   // b) Sumar 1 a cada uno de los 15 elementos del arreglo bono
   for ( var i = 0; i < bono.length; ++i )
   {
      bono[ i ] += 1;
   }

   document.getElementById( "resBono" ).innerHTML = 
      "Arreglo 'bono' incrementado: [" + bono.join( ", " ) + "]";
}

function ejecutarPuntuaciones()
{
   var mejoresPuntuaciones = [99, 95, 92, 88, 85, 80, 78, 70];
   var salida = "";

   // c) Mostrar los cinco valores del arreglo mejoresPuntuaciones, separados por espacios
   for ( var i = 0; i < 5; ++i )
   {
      salida += mejoresPuntuaciones[ i ] + " ";
   }

   document.getElementById( "resPuntuaciones" ).innerHTML = 
      "Primeros 5 valores: " + salida;
}

function iniciar()
{
   document.getElementById( "btnCuentas" ).addEventListener( "click", ejecutarCuentas, false );
   document.getElementById( "btnBono" ).addEventListener( "click", ejecutarBono, false );
   document.getElementById( "btnPuntuaciones" ).addEventListener( "click", ejecutarPuntuaciones, false );
}

window.addEventListener( "load", iniciar, false );