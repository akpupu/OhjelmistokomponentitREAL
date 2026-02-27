// App.jsx
import Tervehdys from "../Tervehdys";

function App() {
  return (
    <div>
      {/* Tässä lähetetään "nimi"-propsi komponentille */}
      <Tervehdys nimi="Eero" />
      <Tervehdys nimi="Riila" />
    </div>
  );
}

export default App;
