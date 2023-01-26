import fusca from './fusca.png'
import './App.css';

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={fusca} className="App-logo" alt="logo" />
        <p>
          Fusca Vermelho
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Oi Devs
        </a>
      </header>
    </div>
  );
}

export default App;
