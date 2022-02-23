import SearchEngine from "./SearchEngine";
import Timestamp from "./Timestamp"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather Forecast
        </h1>
        <h2 className="subtitle">Find the forecast in your city</h2>
      </header>
      <div className="SearchEngine">
      <SearchEngine />
      </div>
      <footer>
        <Timestamp />
      <div className="d-flex justify-content-center">
          <p>
            <span role="img" aria-label="robot">
              🤖
            </span>
            Open source code
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              {""} made by Candice Drave
              <span role="img" aria-label="robot">
                🤖
              </span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
