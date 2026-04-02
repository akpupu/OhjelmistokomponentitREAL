function OpiskelijaTiedot({ opiskelija }) {
  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

export default OpiskelijaTiedot;
