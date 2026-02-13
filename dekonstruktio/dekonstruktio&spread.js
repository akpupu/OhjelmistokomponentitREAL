const numerot = [10, 20, 30, 40];

let eka = numerot[0];

let loput = numerot.slice(1);

console.log(eka); // 10

console.log(loput); // [20, 30, 40]

const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};

const { nimi, ika, koulutus, kaupunki } = opiskelija;

console.log(nimi);
console.log(ika);
let muutTiedot = { koulutus, kaupunki };

//console.log(Object.values(opiskelija)[0]);
//console.log(Object.values(opiskelija)[1]);
//const muutTiedot = opiskelija.slice(2);
console.log(muutTiedot);

const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];
const fullstack = [...backend, ...frontend, "Git"];
console.log(fullstack);

const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};

const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};
const aktiivinen = true;

const kaytaja = {
  ...perusTiedot,
  ...lisatiedot,
  aktiivinen,
};

console.log(kaytaja);
