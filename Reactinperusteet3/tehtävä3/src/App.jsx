import Kayttajakortti from "./tehtava/Kayttajakortti";

function App() {
  return (
    <div>
      <Kayttajakortti nimi="Eero" lista={["React", "JavaScript", "CSS"]} />
    </div>
  );
}

export default App;
