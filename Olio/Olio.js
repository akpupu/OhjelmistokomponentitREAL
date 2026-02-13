const henkilo = {
  nimi: "Aino",
  ika: 22,
  koulutus: "Tietojenkäsittely",
};

console.log(henkilo.nimi);
console.log(henkilo.ika);
console.log(henkilo.koulutus);

class Ajoneuvo {
  constructor(valmistaja, tyyppi, valmistusvuosi) {
    this.valmistaja = valmistaja;
    this.tyyppi = tyyppi;
    this.valmistusvuosi = valmistusvuosi;
  }
  tulostaTiedot() {
    console.log(
      `Valmistaja: ${this.valmistaja}, Tyyppi: ${this.tyyppi}, Valmistusvuosi: ${this.valmistusvuosi}`,
    );
  }
}
const ajoneuvo1 = new Ajoneuvo("BMW", "X5", 2022);
const ajoneuvo2 = new Ajoneuvo("Audi", "A4", 2018);

ajoneuvo1.tulostaTiedot();
ajoneuvo2.tulostaTiedot();

const elokuvat = [
  { nimi: "Inception", ohjaaja: "Christopher Nolan", vuosi: 2010 },
  { nimi: "Interstellar", ohjaaja: "Christopher Nolan", vuosi: 2014 },
  {
    nimi: "The Matrix",
    ohjaaja: "Lana ja Lilly Wachowski",
    vuosi: 1999,
  },
];

elokuvat.forEach((elokuva) => {
  console.log(
    `Nimi: ${elokuva.nimi}, Ohjaaja: ${elokuva.ohjaaja}, Vuosi: ${elokuva.vuosi}`,
  );
});
