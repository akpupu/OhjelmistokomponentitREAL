import OpiskelijaTiedot from "./OpiskelijaTiedot";

function App() {
  const opiskelija = {
    nimi: "Nj Njutsuki",
    ika: 18,
    kurssi: "Ohjelmiston kehitys",
  };

  return (
    <div>
      <h3>Hei, Noah!</h3>
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
