import SearchEngine from "./SearchEngine";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather Forecast
        </h1>
        <h2>Find the forecast in your city</h2>
        <SearchEngine />
      </header>
      <p>Open source code coded by Candice Drave</p>
    </div>
  );
}

export default App;
