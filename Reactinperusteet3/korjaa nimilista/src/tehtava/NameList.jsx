import { useState } from "react";

function NameList() {
  const [names, setNames] = useState(["Anna", "Jussi", "Sara"]);

  function addName() {
    setNames([...names, "Uusi nimi"]);
  }

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <button onClick={addName}>Lisää nimi</button>
    </div>
  );
}

export default NameList;
