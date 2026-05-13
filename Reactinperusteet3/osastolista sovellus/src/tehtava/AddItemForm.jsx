import { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue === "") return;

    onAddItem(inputValue);

    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita ostos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">Lisää</button>
    </form>
  );
}

export default AddItemForm;
