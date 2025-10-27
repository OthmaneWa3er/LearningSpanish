const sentences = [
  ["Je me suis réveillé tard aujourd’hui.", "Me desperté tarde hoy."],
  ["Après m’être levé, j’ai pris une douche.", "Después de levantarme, tomé una ducha."],
  ["J’ai pris le petit-déjeuner avec Mariam avant d’aller au travail.", "Desayuné con Mariam antes de ir al trabajo."],
  ["Pendant que je mangeais, j’écoutais de la musique.", "Mientras comía, escuché música."],
  ["Je suis sorti de la maison à huit heures.", "Salí de casa a las ocho."],
  ["Le trafic était terrible, c’est pourquoi je suis arrivé en retard.", "El tráfico fue terrible, por eso llegué tarde."],
  ["J’ai beaucoup travaillé aujourd’hui, mais j’ai appris quelque chose de nouveau.", "Trabajé mucho hoy, pero aprendí algo nuevo."],
  ["Pendant la pause, j’ai parlé avec Raihana.", "Durante la pausa, hablé con Raihana."],
  ["Après le travail, je suis allé au supermarché.", "Después del trabajo, fui al supermercado."],
  ["J’ai acheté du pain, du lait et des fruits.", "Compré pan, leche y frutas."],
  ["Quand je suis rentré à la maison, j’ai préparé le dîner.", "Cuando llegué a casa, cociné la cena."],
  ["Fati m’a appelé et on a parlé un moment.", "Fati me llamó y hablamos un rato."],
  ["Avant de dormir, j’ai regardé une série sur Netflix.", "Antes de dormir, vi una serie en Netflix."],
  ["Aujourd’hui il fait très froid, donc je reste à la maison.", "Hoy hace mucho frío, así que me quedo en casa."],
  ["Parfois je sors marcher l’après-midi.", "A veces salgo a caminar por la tarde."],
  ["J’aime écouter de la musique pendant que j’étudie.", "Me gusta escuchar música mientras estudio."],
  ["J’essaie toujours de pratiquer l’espagnol tous les jours.", "Siempre intento practicar español todos los días."],
  ["Hier soir, j’ai étudié pendant une heure et demie.", "Anoche estudié una hora y media."],
  ["Ensuite, j’ai écrit quelques phrases dans mon cahier.", "Luego, escribí unas frases en mi cuaderno."],
  ["Ce n’était pas facile, mais je l’ai compris à la fin.", "No fue fácil, pero lo entendí al final."],
  ["Le week-end dernier, j’ai rendu visite à mes amis.", "El fin de semana pasado visité a mis amigos."],
  ["On s’est beaucoup amusés, même s’il pleuvait.", "Nos divertimos mucho, aunque llovía."],
  ["Ce matin, je me suis senti un peu fatigué.", "Esta mañana me sentí un poco cansado."],
  ["Cependant, je suis allé à la salle de sport quand même.", "Sin embargo, fui al gimnasio de todos modos."],
  ["Maintenant je suis détendu et prêt à dormir.", "Ahora estoy relajado y listo para dormir."]
];

let index = 0;
const container = document.getElementById("sentences");
const nextBtn = document.getElementById("nextBtn");

// Speak Spanish function
function speakSpanish(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "es-ES"; // Spanish Spain (clear pronunciation)
  utter.rate = 1; // normal speed
  speechSynthesis.speak(utter);
}

function showNextSentence() {
  if (index >= sentences.length) {
    nextBtn.disabled = true;
    nextBtn.innerText = "🎉 Toutes les phrases sont affichées !";
    return;
  }

  const [fr, es] = sentences[index];

  const card = document.createElement("div");
  card.classList.add("sentence-card");

  card.innerHTML = `
    <p><strong>${fr}</strong></p>
    <button class="show-btn">Afficher la traduction</button>
    <p class="translation">${es}</p>
    <button class="audio-btn">🔊 Écouter</button>
  `;

  const showBtn = card.querySelector(".show-btn");
  const translation = card.querySelector(".translation");
  const audioBtn = card.querySelector(".audio-btn");

  // Hide spanish + audio at first
  translation.style.display = "none";
  audioBtn.style.display = "none";

  // Reveal translation + audio
  showBtn.addEventListener("click", () => {
    translation.style.display = "block";
    audioBtn.style.display = "inline-block";
    showBtn.style.display = "none";
  });

  // Play audio when clicked
  audioBtn.addEventListener("click", () => {
    speakSpanish(es);
  });

  container.appendChild(card);
  index++;
}

nextBtn.addEventListener("click", showNextSentence);

// Load first automatically
showNextSentence();
