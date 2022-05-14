import heart from './heart.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="App-logo" alt="logo" />
        <p>
          Я тебе люблю
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
      </header>
    </div>
  );
}

export default App;
