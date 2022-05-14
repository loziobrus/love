import './App.css';

function App() {
  const heart = 'https://media3.giphy.com/media/xwx6UV2qgwLlDQ5MRW/giphy.gif';

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
