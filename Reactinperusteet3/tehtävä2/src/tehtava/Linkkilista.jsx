function Linkkilista({ lista }) {
  return (
    <ul>
      {lista.map((linkki) => (
        <li key={linkki.id}>
          <a href={linkki.url} target="_blank">
            {linkki.nimi}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Linkkilista;
