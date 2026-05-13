import Tervehdys from "./Tervehdys";
import Infolista from "./Infolista";

function Kayttajakortti({ nimi, lista }) {
  return (
    <div>
      <Tervehdys nimi={nimi} />
      <Infolista lista={lista} />
    </div>
  );
}

export default Kayttajakortti;
