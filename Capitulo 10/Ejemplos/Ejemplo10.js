// Fig. 10.12: ImagenAleatoria2.js
// Selección de imágenes al azar usando arreglos
var imgIcono;

// Nombres exactos de las imágenes que tienes en tu carpeta img (sin la extensión .png)
var imagenes = [ 
   "CPE", "EPT", "GPP", "SEO", 
   "cpphtp", "jhtp", "jhtp8", "logo", "oceano" 
];

var descripciones = [ 
   "Icono CPE", "Icono EPT", "Icono GPP", "Icono SEO", 
   "Libro C++", "Libro Java", "Libro Java 8", "Logo", "Océano" 
];

// elegir una imagen al azar y su descripción correspondiente, después modificar
// el elemento img en el cuerpo del documento
function elegirImagen()
{
   // Ajustado a imagenes.length para que elija entre las 9 imágenes disponibles
   var indice = Math.floor( Math.random() * imagenes.length );
   
   // Se antepone "img/" para apuntar a la subcarpeta de imágenes
   imgIcono.setAttribute( "src", "img/" + imagenes[ indice ] + ".png" );
   imgIcono.setAttribute( "alt", descripciones[ indice ] );
} // fin de la función elegirImagen

// registra el manejador de eventos de clic de imgIcono
function iniciar()
{
   imgIcono = document.getElementById( "imagen" );
   imgIcono.addEventListener( "click", elegirImagen, false );
} // fin de la función iniciar

window.addEventListener( "load", iniciar, false );