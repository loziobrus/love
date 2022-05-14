import './App.css';

function App() {
  const heart = 'https://media3.giphy.com/media/xwx6UV2qgwLlDQ5MRW/giphy.gif';
  const message = 'а я тебе люблю))))';

  return (
    <div className="App">
      <header className="App-header">
        <img src={heart} className="App-logo" alt="logo" />
        <h2>{message}</h2>
      </header>
    </div>
  );
}

export default App;
