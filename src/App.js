import logo from './logo.svg';
import './App.css';

function App() {
  const images = [1,2,3]
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {images.map((image) => (
            <img src={logo} className="App-logo" alt="logo" key={image} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
