// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos sincronizado exactamente con el video
var lyricsData = [
  { text: "Amantes", time: 22 },
  { text: "En la obscuridad", time: 24 },
  { text: "Brillando en el umbral", time: 26 },
  { text: "Luces de neón", time: 30 },
  { text: "Muy cerca", time: 33 },
  { text: "Muy cerca, tú y yo", time: 35 },
  { text: "No me dejes ir", time: 38 },
  { text: "No te escaparás", time: 41 },
  { text: "Tienes en tu lunar", time: 46 },
  { text: "Un astro", time: 48 },
  { text: "Y en tu cuerpo todo", time: 51 },
  { text: "El universo entero", time: 53 },
  { text: "Me rindo a tu corazón", time: 56 },
  { text: "Como los ríos al mar", time: 62 },
  { text: "Resbalo", time: 67 },
  { text: "Cascadas", time: 69 },
  { text: "Eres mi paz en esta guerra", time: 73 },
  { text: "Mi tierra firme en la tormenta", time: 78 },
  { text: "Eres el fuego de mi hoguera", time: 84 },
  { text: "Eres mi arriba, eres mi abajo", time: 90 },
  { text: "Amantes", time: 107 },
  { text: "En el bulevar", time: 109 },
  { text: "Como gran premonición", time: 111 },
  { text: "Sobre la ciudad", time: 114 },
  { text: "Siluetas", time: 118 },
  { text: "Contornos que se van", time: 120 },
  { text: "Que se funden", time: 122 },
  { text: "En una exhalación", time: 125 },
  { text: "Tienes en tu lunar", time: 129 },
  { text: "Un astro", time: 132 },
  { text: "Y en tu cuerpo todo", time: 135 },
  { text: "El firmamento entero", time: 137 },
  { text: "Me rindo a tu corazón", time: 141 },
  { text: "Como las nubes al sol", time: 146 },
  { text: "Resbalo", time: 151 },
  { text: "Cascadas", time: 153 },
  { text: "Eres mi paz en esta guerra", time: 157 },
  { text: "Mi tierra firme en la tormenta", time: 163 },
  { text: "Eres el fuego de mi hoguera", time: 168 },
  { text: "Eres adentro, eres afuera", time: 174 },
  { text: "Un lunar (entre calles y palmeras)", time: 189 },
  { text: "Un astro (vacilante obscuridad)", time: 193 },
  { text: "Y en tu cuerpo todo (remolinos de tristeza)", time: 195 },
  { text: "El firmamento entero (que te apuntan hacia el mar)", time: 198 },
  { text: "Un lunar (entre calles y palmeras)", time: 202 },
  { text: "Un astro (vacilante obscuridad)", time: 206 },
  { text: "Y en tu cuerpo todo (remolinos de tristeza)", time: 208 },
  { text: "El universo entero (que te apuntan hacia el mar)", time: 211 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  
  // Usamos un filtro inverso o findLast (si el navegador lo soporta) para encontrar 
  // la línea más reciente. Esto evita el problema de las líneas rápidas superpuestas.
  var currentLine = null;
  for (var i = lyricsData.length - 1; i >= 0; i--) {
      if (time >= lyricsData[i].time && time < lyricsData[i].time + 6) {
          currentLine = lyricsData[i];
          break;
      }
  }

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Considera bajar el intervalo a algo más rápido (ej: 100ms) para que 
// la sincronización y la opacidad se sientan más fluidas.
setInterval(updateLyrics, 85);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if(titulo) {
      titulo.style.animation = "fadeOut 3s ease-in-out forwards"; 
      setTimeout(function () {
        titulo.style.display = "none";
      }, 3000); // Espera 3 segundos antes de ocultar completamente
  }
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);