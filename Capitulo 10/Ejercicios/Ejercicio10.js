// Ejercicio 10.10: Ejercicio10_10.js
// Arreglo de contadores para los 9 rangos de salario (índices 0 a 8 representan $200-$299 hasta $1000 y más)
var rangos = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

// Etiquetas correspondientes para la tabla
var etiquetasRangos = [
   "$200 a 299",
   "$300 a 399",
   "$400 a 499",
   "$500 a 599",
   "$600 a 699",
   "$700 a 799",
   "$800 a 899",
   "$900 a 999",
   "$1000 y más"
];

function registrarVenta()
{
   var campoVentas = document.getElementById( "ventas" );
   var ventasBrutas = parseFloat( campoVentas.value );

   if ( isNaN( ventasBrutas ) || ventasBrutas < 0 )
   {
      alert( "Por favor, ingrese un monto de ventas válido." );
      return;
   }

   // Cálculo del salario: $200 base + 9% de las ventas brutas
   var salario = Math.floor( 200 + ( 0.09 * ventasBrutas ) );

   // Determinar el índice del rango correspondiente
   var indiceRango = Math.floor( salario / 100 ) - 2;

   // Si el salario es $1000 o más, se agrupa en el último rango (índice 8)
   if ( indiceRango > 8 )
   {
      indiceRango = 8;
   }

   // Incrementar el contador del rango
   ++rangos[ indiceRango ];

   // Mostrar mensaje con el salario calculado
   document.getElementById( "mensajeResultado" ).innerHTML = 
      "Último salario calculado: $" + salario + " (Registrado en rango " + etiquetasRangos[ indiceRango ] + ")";

   // Limpiar el campo de entrada
   campoVentas.value = "";
   campoVentas.focus();

   // Actualizar la tabla de resumen
   mostrarResultados();
}

function mostrarResultados()
{
   var contenidoTabla = "<table><thead><tr><th>Rango de Salario</th><th>Cantidad de Vendedores</th></tr></thead><tbody>";

   for ( var i = 0; i < rangos.length; ++i )
   {
      contenidoTabla += "<tr><td>" + etiquetasRangos[ i ] + "</td><td>" + rangos[ i ] + "</td></tr>";
   }

   contenidoTabla += "</tbody></table>";
   document.getElementById( "resultadoTabla" ).innerHTML = contenidoTabla;
}

function iniciar()
{
   var boton = document.getElementById( "botonCalcular" );
   boton.addEventListener( "click", registrarVenta, false );
   mostrarResultados(); // Muestra la tabla inicial con contadores en 0
}

window.addEventListener( "load", iniciar, false );