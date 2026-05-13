function Infolista({ lista }) {
  return (
    <ul>
      {lista.map((asia, index) => (
        <li key={index}>{asia}</li>
      ))}
    </ul>
  );
}

export default Infolista;
