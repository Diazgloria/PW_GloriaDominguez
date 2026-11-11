// Ejercicio 10.14: Ejercicio10_14.js

function simularTiros()
{
   // Arreglo bidimensional de 7x7 (índices 1 a 6 para los dados)
   var combinaciones = [
      [ 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0 ]
   ];

   // Arreglo unidimensional para almacenar el total por cada suma (de 2 a 12)
   var totalSumas = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

   var TOTAL_TIROS = 36000;

   // Simulación de 36,000 tiros
   for ( var i = 0; i < TOTAL_TIROS; ++i )
   {
      var dado1 = Math.floor( 1 + Math.random() * 6 );
      var dado2 = Math.floor( 1 + Math.random() * 6 );

      // Incrementar contador de la combinación en la matriz bidimensional
      ++combinaciones[ dado1 ][ dado2 ];

      // Incrementar contador acumulado por suma
      var suma = dado1 + dado2;
      ++totalSumas[ suma ];
   }

   mostrarTablaMatriz( combinaciones );
   mostrarResumenSumas( totalSumas, TOTAL_TIROS );
}

function mostrarTablaMatriz( matriz )
{
   var htmlTabla = "<h3>Matriz de Frecuencia de Combinaciones (Dado 1 vs Dado 2)</h3>";
   htmlTabla += "<table><thead><tr><th>Dado 1 \\ Dado 2</th>";

   for ( var col = 1; col <= 6; ++col )
   {
      htmlTabla += "<th>" + col + "</th>";
   }
   htmlTabla += "</tr></thead><tbody>";

   for ( var fila = 1; fila <= 6; ++fila )
   {
      htmlTabla += "<tr><th>" + fila + "</th>";
      for ( var c = 1; c <= 6; ++c )
      {
         htmlTabla += "<td>" + matriz[ fila ][ c ] + "</td>";
      }
      htmlTabla += "</tr>";
   }

   htmlTabla += "</tbody></table>";
   document.getElementById( "resultadoFrecuencias" ).innerHTML = htmlTabla;
}

function mostrarResumenSumas( sumas, totalTiros )
{
   var htmlResumen = "<h3>Frecuencia y Porcentaje por Suma Obtenida</h3>";
   htmlResumen += "<table><thead><tr><th>Suma</th><th>Apariciones</th><th>Porcentaje Real</th><th>Porcentaje Esperado</th></tr></thead><tbody>";

   // Probabilidades teóricas para sumas de 2 a 12
   var probTeorica = [0, 0, 1/36, 2/36, 3/36, 4/36, 5/36, 6/36, 5/36, 4/36, 3/36, 2/36, 1/36];

   for ( var s = 2; s <= 12; ++s )
   {
      var pctReal = ( ( sumas[ s ] / totalTiros ) * 100 ).toFixed(2);
      var pctEsperado = ( probTeorica[ s ] * 100 ).toFixed(2);

      htmlResumen += "<tr><td><b>" + s + "</b></td><td>" + sumas[ s ] + "</td><td>" + 
                     pctReal + "%</td><td>" + pctEsperado + "%</td></tr>";
   }

   htmlResumen += "</tbody></table>";

   htmlResumen += "<div class='resumen'><b>Análisis de Razonabilidad:</b><br>" +
      "Como se observa, los resultados son totalmente razonables. La suma <b>7</b> aparece cerca de 1/6 parte de las veces (~16.67%), " +
      "mientras que las sumas <b>2</b> y <b>12</b> son las menos frecuentes (~2.78%), coincidiendo con las probabilidades teóricas.</div>";

   document.getElementById( "resumenSumas" ).innerHTML = htmlResumen;
}

function iniciar()
{
   var boton = document.getElementById( "botonSimular" );
   boton.addEventListener( "click", simularTiros, false );
}

window.addEventListener( "load", iniciar, false );