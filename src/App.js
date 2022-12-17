import logo from './logo.svg';
import './App.css';
import BasicExample from './components/BasicExample';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BasicExample/>
      <div className="login">
        <p>Mail id:</p>
        <input type="text"></input>
        <p>Pass word</p>
        <input type="text"></input>
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
