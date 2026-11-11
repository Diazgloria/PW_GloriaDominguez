// Ejercicio 10.16: Ejercicio10_16.js

function calcularCriba()
{
   var TAMANO = 1000;
   var primo = new Array( TAMANO );

   // a) Inicializar todos los elementos en 1 (true)
   for ( var i = 0; i < TAMANO; ++i )
   {
      primo[ i ] = 1;
   }

   // b) Establecer los primeros dos elementos en cero (0 y 1 no son primos)
   primo[ 0 ] = 0;
   primo[ 1 ] = 0;

   // Algoritmo de La criba de Eratóstenes
   for ( var i = 2; i < TAMANO; ++i )
   {
      if ( primo[ i ] === 1 )
      {
         // Asignar cero a todos los múltiplos del índice actual
         for ( var j = i * 2; j < TAMANO; j += i )
         {
            primo[ j ] = 0;
         }
      }
   }

   // Imprimir los índices cuyos elementos aún son 1
   var cantidadPrimos = 0;
   var htmlPrimos = "";

   for ( var k = 2; k < TAMANO; ++k )
   {
      if ( primo[ k ] === 1 )
      {
         ++cantidadPrimos;
         htmlPrimos += "<span class='item-primo'>" + k + "</span>";
      }
   }

   document.getElementById( "resumenPrimos" ).innerHTML = 
      "Se encontraron " + cantidadPrimos + " números primos entre 1 y 999:";
   document.getElementById( "contenedorPrimos" ).innerHTML = htmlPrimos;
}

function iniciar()
{
   var boton = document.getElementById( "botonCalcular" );
   boton.addEventListener( "click", calcularCriba, false );
}

window.addEventListener( "load", iniciar, false );