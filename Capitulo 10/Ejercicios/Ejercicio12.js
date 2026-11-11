// Ejercicio 10.12: Ejercicio10_12.js
var numerosUnicos = []; // Arreglo con la capacidad justa requerida
var contadorEntradas = 0;

function procesarNumero()
{
   if ( contadorEntradas >= 10 )
   {
      alert( "Ya ha ingresado los 10 números." );
      return;
   }

   var campoNumero = document.getElementById( "numero" );
   var valor = parseInt( campoNumero.value );

   // Validar que el número esté en el rango [10, 100]
   if ( isNaN( valor ) || valor < 10 || valor > 100 )
   {
      alert( "Por favor, ingrese un número entero válido entre 10 y 100." );
      return;
   }

   ++contadorEntradas;

   // Se almacena e imprime solo si no es un duplicado
   if ( numerosUnicos.indexOf( valor ) === -1 )
   {
      numerosUnicos.push( valor );
   }

   // Actualizar la interfaz
   document.getElementById( "contadorEntradas" ).innerHTML = "Ingreso " + contadorEntradas + " de 10";
   document.getElementById( "resultado" ).innerHTML = 
      "Números únicos ingresados: " + numerosUnicos.join( ", " );

   campoNumero.value = "";
   campoNumero.focus();

   if ( contadorEntradas === 10 )
   {
      document.getElementById( "botonIngresar" ).disabled = true;
   }
}

function iniciar()
{
   var boton = document.getElementById( "botonIngresar" );
   boton.addEventListener( "click", procesarNumero, false );
}

window.addEventListener( "load", iniciar, false );