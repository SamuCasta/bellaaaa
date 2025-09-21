// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  // Primera Parte
  { text: "No, no hay nada mejor", time: 31 },
  { text: "Que probar de un primer beso", time: 37 },
  { text: "Y más de ti", time: 42 },
  { text: "Veo tantos colores", time: 47 },
  { text: "Y todos mis sentidos estallarán", time: 52 },
  { text: "De tanto amarte", time: 57 },

  // Segunda Parte
  { text: "¿Cómo se puede sentir", time: 64 },
  { text: "Tantas cosas en tan poco tiempo", time: 69 },
  { text: "Y no morir?", time: 74 },
  { text: "Tú puedes hacer un gran nido", time: 80 },
  { text: "En mi universo", time: 85 },
  { text: "Puedes hacer lo que quieras conmigo", time: 90 },

  // Estribillo
  { text: "Yo siento que tú me querí", time: 98 },
  { text: "Como yo te quiero", time: 103 },
  { text: "Acuéstate a mi lado", time: 108 },
  { text: "Esta noche te quiero vivir", time: 113 },
  { text: "Arrúllame, ahógame, aplástame", time: 118 },
  { text: "Desármarme, cómeme, fúmame", time: 123 },
  { text: "Amor inquieto, amor drogado", time: 128 },
  { text: "Amor completo", time: 133 },

  // Tercera Parte
  { text: "Oh, cada vez que yo", time: 143 },
  { text: "Te veo y que te pienso", time: 148 },
  { text: "Siento que florezco", time: 153 },
  { text: "Me duele estar tan lejos", time: 158 },
  { text: "No es fácil que no estés aquí", time: 163 },
  { text: "Y aún así, puedes hacer", time: 168 },
  { text: "Lo que quieras de mí", time: 173 },

  // Estribillo final
  { text: "Yo siento que tú me querí", time: 180 },
  { text: "Como yo te quiero", time: 185 },
  { text: "Acuéstate a mi lado", time: 190 },
  { text: "Esta noche te quiero vivir", time: 195 },
  { text: "Arrúllame, ahógame, aplástame", time: 200 },
  { text: "Desármarme, cómeme, fúmame", time: 205 },
  { text: "Amor inquieto, amor drogado", time: 210 },
  { text: "Amor completo", time: 215 },
  { text: "Amor inquieto, amor completo", time: 220 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

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

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);