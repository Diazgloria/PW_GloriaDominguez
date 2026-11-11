// Ejercicio 10.15: Ejercicio10_15.js

var piso = [];
var TAMANO = 20;

// Estado inicial de la tortuga
var x = 0;
var y = 0;
var plumaAbajo = false; // Pluma arriba por defecto
var direccion = 0;     // 0: Derecha, 1: Abajo, 2: Izquierda, 3: Arriba

function inicializarPiso()
{
   piso = [];
   for ( var i = 0; i < TAMANO; ++i )
   {
      var fila = [];
      for ( var j = 0; j < TAMANO; ++j )
      {
         fila.push( 0 ); // Todo el arreglo piso se inicializa en 0
      }
      piso.push( fila );
   }

   x = 0;
   y = 0;
   plumaAbajo = false;
   direccion = 0;
}

function procesarComandos()
{
   inicializarPiso();

   var textoComandos = document.getElementById( "comandos" ).value;
   var lista = textoComandos.split( "," );
   var i = 0;

   while ( i < lista.length )
   {
      var cmd = parseInt( lista[ i ].trim() );

      if ( isNaN( cmd ) )
      {
         ++i;
         continue;
      }

      switch ( cmd )
      {
         case 1: // Pluma arriba
            plumaAbajo = false;
            break;

         case 2: // Pluma abajo
            plumaAbajo = true;
            piso[ x ][ y ] = 1; // Marca con 1 la celda inicial del trazo
            break;

         case 3: // Girar a la derecha
            direccion = ( direccion + 1 ) % 4;
            break;

         case 4: // Girar a la izquierda
            direccion = ( direccion + 3 ) % 4;
            break;

         case 5: // Avanzar n espacios
            ++i; // Leer el número de pasos (ejemplo 5,12)
            var pasos = parseInt( lista[ i ].trim() );
            if ( !isNaN( pasos ) )
            {
               moverTortuga( pasos );
            }
            break;

         case 6: // Imprimir el arreglo de 20 por 20
            renderizarPiso();
            break;

         case 9: // Fin de datos (centinela)
            renderizarPiso();
            return;
      }

      ++i;
   }

   renderizarPiso();
}

function moverTortuga( pasos )
{
   for ( var p = 0; p < pasos; ++p )
   {
      if ( direccion === 0 && y < TAMANO - 1 ) ++y;      // Derecha
      else if ( direccion === 1 && x < TAMANO - 1 ) ++x; // Abajo
      else if ( direccion === 2 && y > 0 ) --y;          // Izquierda
      else if ( direccion === 3 && x > 0 ) --x;          // Arriba

      // Si la pluma está abajo, establece el elemento correspondiente en 1
      if ( plumaAbajo )
      {
         piso[ x ][ y ] = 1;
      }
   }
}

function renderizarPiso()
{
   var html = "<table class='tabla-piso'>";

   for ( var i = 0; i < TAMANO; ++i )
   {
      html += "<tr>";
      for ( var j = 0; j < TAMANO; ++j )
      {
         var clase = "";
         var simbolo = " "; // Muestra espacio en blanco para ceros

         if ( i === x && j === y )
         {
            clase = "tortuga";
            simbolo = "T"; // Posición actual de la tortuga
         }
         else if ( piso[ i ][ j ] === 1 )
         {
            clase = "trazo";
            simbolo = "*"; // Muestra un asterisco para cada 1 en el arreglo
         }

         html += "<td class='" + clase + "'>" + simbolo + "</td>";
      }
      html += "</tr>";
   }

   html += "</table>";
   document.getElementById( "contenedorPiso" ).innerHTML = html;
}

function iniciar()
{
   document.getElementById( "botonEjecutar" ).addEventListener( "click", procesarComandos, false );
   document.getElementById( "botonReiniciar" ).addEventListener( "click", function() {
      inicializarPiso();
      renderizarPiso();
   }, false );

   // Renderizado inicial al cargar la página
   procesarComandos();
}

window.addEventListener( "load", iniciar, false );