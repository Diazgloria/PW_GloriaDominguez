// Ejercicio 10.17: Ejercicio10_17.js

// Variables de posición (del 1 al 70)
var posTortuga = 1;
var posLiebre = 1;
var intervaloReloj = null;
var elementoPista = null;

function moverTortuga()
{
   // Generar entero aleatorio i entre 1 y 10
   var i = Math.floor( 1 + Math.random() * 10 );

   if ( i >= 1 && i <= 5 ) // 50% Paso pesado rápido
   {
      posTortuga += 3;
   }
   else if ( i >= 6 && i <= 7 ) // 20% Resbalón
   {
      posTortuga -= 6;
   }
   else if ( i >= 8 && i <= 10 ) // 30% Paso pesado lento
   {
      posTortuga += 1;
   }

   // Garantizar que no resbale antes de la posición 1
   if ( posTortuga < 1 )
   {
      posTortuga = 1;
   }
}

function moverLiebre()
{
   // Generar entero aleatorio i entre 1 y 10
   var i = Math.floor( 1 + Math.random() * 10 );

   if ( i >= 1 && i <= 2 ) // 20% Dormir
   {
      // Ningún movimiento
   }
   else if ( i >= 3 && i <= 4 ) // 20% Gran salto
   {
      posLiebre += 9;
   }
   else if ( i === 5 ) // 10% Gran resbalón
   {
      posLiebre -= 12;
   }
   else if ( i >= 6 && i <= 8 ) // 30% Pequeño salto
   {
      posLiebre += 1;
   }
   else if ( i >= 9 && i <= 10 ) // 20% Pequeño resbalón
   {
      posLiebre -= 2;
   }

   // Garantizar que no resbale antes de la posición 1
   if ( posLiebre < 1 )
   {
      posLiebre = 1;
   }
}

function ticReloj()
{
   moverTortuga();
   moverLiebre();

   // Construir la línea de 70 posiciones
   var linea = "";

   if ( posTortuga === posLiebre )
   {
      // Si ambos están en la misma posición
      for ( var p = 1; p < posTortuga; ++p )
      {
         linea += " ";
      }
      linea += "OUCH!!!";
   }
   else
   {
      for ( var p = 1; p <= 70; ++p )
      {
         if ( p === posTortuga )
         {
            linea += "T";
         }
         else if ( p === posLiebre )
         {
            linea += "H";
         }
         else
         {
            linea += " ";
         }
      }
   }

   elementoPista.innerHTML += linea + "\n";
   elementoPista.scrollTop = elementoPista.scrollHeight; // Auto-scroll hacia abajo

   // Verificar si alguno llegó a la meta (posición 70 o más)
   if ( posTortuga >= 70 || posLiebre >= 70 )
   {
      clearInterval( intervaloReloj ); // Detener el temporizador

      var resultadoFinal = "\n";
      if ( posTortuga >= 70 && posLiebre >= 70 )
      {
         resultadoFinal += "<span class='mensaje-ganador'>Es un empate.</span>";
      }
      else if ( posTortuga >= 70 )
      {
         resultadoFinal += "<span class='mensaje-ganador'>LA TORTUGA GANA!!! YAY!!!</span>";
      }
      else if ( posLiebre >= 70 )
      {
         resultadoFinal += "<span class='mensaje-ganador'>La liebre gana. Que mal.</span>";
      }

      elementoPista.innerHTML += resultadoFinal;
      document.getElementById( "botonIniciar" ).disabled = false;
   }
}

function iniciarCarrera()
{
   if ( intervaloReloj !== null )
   {
      clearInterval( intervaloReloj );
   }

   document.getElementById( "botonIniciar" ).disabled = true;
   elementoPista = document.getElementById( "pista" );

   posTortuga = 1;
   posLiebre = 1;

   elementoPista.innerHTML = "<span class='mensaje-inicial'>BANG !!!!!\nY ARRANCAN !!!!!</span>\n\n";

   // Simular cada tic de reloj (1 segundo por paso)
   intervaloReloj = setInterval( ticReloj, 100 ); // Ajustado a 100ms para una animación más fluida
}

function cargar()
{
   var boton = document.getElementById( "botonIniciar" );
   boton.addEventListener( "click", iniciarCarrera, false );
}

window.addEventListener( "load", cargar, false );