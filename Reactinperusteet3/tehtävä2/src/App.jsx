import Linkkilista from "./tehtava/Linkkilista";

function App() {
  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];

  return (
    <div>
      <h1>Linkkien lista</h1>

      <Linkkilista lista={linkit} />
    </div>
  );
}

export default App;
