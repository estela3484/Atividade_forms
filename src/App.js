import simpsons from './transferir.png';
import './App.css';

function App() {

  const nome= "Pessoa"
  const newName = nome.toUpperCase()

  function sum1(a,b){
    return a + b
  }

 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bom dia React</h1>
        <p>
       Ola galeria Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <img src={simpsons} className="App-logo" alt="logo" />
        <p> variavel numerica: {2+3}</p>
        <p>string: {nome}</p>
      </header>
    </div>
  );
}

export default App;
