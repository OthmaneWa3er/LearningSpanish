const sentences = [
  ["Me desperté tarde hoy.", "Je me suis réveillé tard aujourd’hui."],
  ["Después de levantarme, tomé una ducha.", "Après m’être levé, j’ai pris une douche."],
  ["Desayuné con Mariam antes de ir al trabajo.", "J’ai pris le petit-déjeuner avec Mariam avant d’aller au travail."],
  ["Mientras comía, escuché música.", "Pendant que je mangeais, j’écoutais de la musique."],
  ["Salí de casa a las ocho.", "Je suis sorti de la maison à huit heures."],
  ["El tráfico fue terrible, por eso llegué tarde.", "Le trafic était terrible, c’est pourquoi je suis arrivé en retard."],
  ["Trabajé mucho hoy, pero aprendí algo nuevo.", "J’ai beaucoup travaillé aujourd’hui, mais j’ai appris quelque chose de nouveau."],
  ["Durante la pausa, hablé con Raihana.", "Pendant la pause, j’ai parlé avec Raihana."],
  ["Después del trabajo, fui al supermercado.", "Après le travail, je suis allé au supermarché."],
  ["Compré pan, leche y frutas.", "J’ai acheté du pain, du lait et des fruits."],
  ["Cuando llegué a casa, cociné la cena.", "Quand je suis rentré à la maison, j’ai préparé le dîner."],
  ["Fati me llamó y hablamos un rato.", "Fati m’a appelé et on a parlé un moment."],
  ["Antes de dormir, vi una serie en Netflix.", "Avant de dormir, j’ai regardé une série sur Netflix."],
  ["Hoy hace mucho frío, así que me quedo en casa.", "Aujourd’hui il fait très froid, donc je reste à la maison."],
  ["A veces salgo a caminar por la tarde.", "Parfois je sors marcher l’après-midi."],
  ["Me gusta escuchar música mientras estudio.", "J’aime écouter de la musique pendant que j’étudie."],
  ["Siempre intento practicar español todos los días.", "J’essaie toujours de pratiquer l’espagnol tous les jours."],
  ["Anoche estudié una hora y media.", "Hier soir, j’ai étudié pendant une heure et demie."],
  ["Luego, escribí unas frases en mi cuaderno.", "Ensuite, j’ai écrit quelques phrases dans mon cahier."],
  ["No fue fácil, pero lo entendí al final.", "Ce n’était pas facile, mais je l’ai compris à la fin."],
  ["El fin de semana pasado visité a mis amigos.", "Le week-end dernier, j’ai rendu visite à mes amis."],
  ["Nos divertimos mucho, aunque llovía.", "On s’est beaucoup amusés, même s’il pleuvait."],
  ["Esta mañana me sentí un poco cansado.", "Ce matin, je me suis senti un peu fatigué."],
  ["Sin embargo, fui al gimnasio de todos modos.", "Cependant, je suis allé à la salle de sport quand même."],
  ["Ahora estoy relajado y listo para dormir.", "Maintenant je suis détendu et prêt à dormir."]
];

let index = 0;
const container = document.getElementById("sentences");
const nextBtn = document.getElementById("nextBtn");

function showSentence() {
  if (index >= sentences.length) {
    nextBtn.disabled = true;
    nextBtn.innerText = "🎉 All sentences shown!";
    return;
  }

  const [es, fr] = sentences[index];
  const div = document.createElement("div");
  div.classList.add("sentence");
  div.innerHTML = `<strong>${es}</strong><div class="translation">${fr}</div>`;
  
  div.addEventListener("click", () => {
    div.querySelector(".translation").style.display = "block";
  });

  container.appendChild(div);
  index++;
}

nextBtn.addEventListener("click", showSentence);

// Auto-add on scroll down
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 80) {
    showSentence();
  }
});
