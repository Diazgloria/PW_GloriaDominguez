// Ejercicio 10.13: Ejercicio10_13.js

function simularRecorrido()
{
   // Matriz de 3 filas por 5 columnas
   var ventas = [
      [ 10, 20, 30, 40, 50 ],
      [ 60, 70, 80, 90, 100 ],
      [ 110, 120, 130, 140, 150 ]
   ];

   // Matriz para guardar la etiqueta de orden de ejecución
   var ordenEjecucion = [
      [ "", "", "", "", "" ],
      [ "", "", "", "", "" ],
      [ "", "", "", "", "" ]
   ];

   var paso = 1;

   // Ejecución del código tal como viene especificado en la figura
   for ( var fila in ventas )
   {
      for ( var col in ventas[ fila ] )
      {
         ventas[ fila ][ col ] = 0;
         ordenEjecucion[ fila ][ col ] = "Paso " + paso + "º";
         ++paso;
      }
   }

   // Generar representación gráfica tabular
   var tablaHTML = "<table><thead><tr><th></th><th>Columna 0</th><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th><th>Columna 4</th></tr></thead><tbody>";

   for ( var i = 0; i < ordenEjecucion.length; ++i )
   {
      tablaHTML += "<tr><th>Fila " + i + "</th>";
      for ( var j = 0; j < ordenEjecucion[ i ].length; ++j )
      {
         tablaHTML += "<td><b>ventas[" + i + "][" + j + "]</b><br>" + ordenEjecucion[ i ][ j ] + "</td>";
      }
      tablaHTML += "</tr>";
   }

   tablaHTML += "</tbody></table>";
   document.getElementById( "tablaContenedor" ).innerHTML = tablaHTML;
}

function iniciar()
{
   var boton = document.getElementById( "botonSimular" );
   boton.addEventListener( "click", simularRecorrido, false );
}

window.addEventListener( "load", iniciar, false );