import { useState } from "react";

import KasvatusNappi from "./KasvatusNappi";
import VahennysNappi from "./VahennysNappi";
import NollausNappi from "./NollausNappi";
import TuplaKasvatus from "./TuplaKasvatus";
import CountNaytto from "./CountNäyttö";

function Counter() {
  const [count, setCount] = useState(0);

  function kasvata() {
    setCount(count + 1);
  }

  function vahenna() {
    setCount(count - 1);
  }

  function nollaa() {
    setCount(0);
  }

  function tuplaa() {
    setCount(count + 2);
  }

  return (
    <div>
      <CountNaytto count={count} />

      <KasvatusNappi kasvata={kasvata} />

      <VahennysNappi vahenna={vahenna} />

      <NollausNappi nollaa={nollaa} />

      <TuplaKasvatus tuplaa={tuplaa} />
    </div>
  );
}

export default Counter;
