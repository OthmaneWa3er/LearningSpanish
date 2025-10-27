const sentences = [
  [
  ["Me desperté tarde hoy.", "Fe9t lyoum M3atlaa."],
  ["Después de levantarme, tomé una ducha.", "Man mora ma fe9t khdit wa7ed douche."],
  ["Desayuné con Mariam antes de ir al trabajo.", "Ftert m3a Mariamox 9bel man mchi lkhedma."],
  ["Mientras comía, escuché Corán.", "W ana kanakol, kantsanet l Quran"],
  ["Salí de casa a las ocho.", "khrejt man dar m3a 8:00."],
  ["El tráfico fue terrible, por eso llegué tarde.", "Le trafic était terrible, dakchi 3lach wselt m3atela."],
  ["Trabajé mucho hoy, pero aprendí algo nuevo.", "khdemt bzzf lyoum, walakin t3alemt 7aja jdidaa."],
  ["Durante la pausa, hablé con Raihana.", "Pendant la pause, dwit m3a Raihana."],
  ["Después del trabajo, fui al supermercado.", "Man mora l khedma, mchit l supermarché."],
  ["Compré pan, leche y frutas.", "Chrit lkhobz, l7lib w des fruits."],
  ["Cuando llegué a casa, cociné la cena.", "Fach dkhelt l dar, tayebt l 3cha."],
  ["Fati me llamó y hablamos un rato.", "Fati 3aytat 3liya, w dwina wa7ed chwiya."],
  ["Antes de dormir, vi una serie en Netflix.", "9bel man n3es, tfarejt f wa7ed série f Netflix."],
  ["Hoy hace mucho frío, así que me quedo en casa.", "Lyoum kan lberd bzzf, alors b9it f dar."],
  ["A veces salgo a caminar por la tarde.", "ba3d l marat kankhroj ntmacha f 3chiya."],
  ["Me gusta escuchar música mientras estudio.", "ki 3jebni ntsanet l musique fach kan koun kan9ra."],
  ["Siempre intento practicar español todos los días.", "dima kan7awel n pratiquer l'espagnol kola nhar."],
  ["Anoche estudié una hora y media.", "lbare7 b lil 9rit sa3a w ness."],
  ["Luego, escribí unas frases en mi cuaderno.", "Ensuite, ktebt quelques phrases f l ktab ta3i."],
  ["No fue fácil, pero lo entendí al final.", "makanch sahel wlkin fhemt f lakher."],
  ["El fin de semana pasado visité a mis amigos.", "Le week-end li 9bel, j’ai rendu visite à mes amis."],
  ["Nos divertimos mucho, aunque llovía.", "Nchetna bzzf, wakha kant chta katsob."],
  ["Esta mañana me sentí un poco cansado.", "Had sba7, 7essit brassi wa7ed chwiya 3eyana."],
  ["Sin embargo, fui al gimnasio de todos modos.", "Cependant, mchit la salle quand même."],
  ["Ahora estoy relajado y listo para dormir.", "Maintenant je suis détendu et prêt bach ndir nini."]
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

