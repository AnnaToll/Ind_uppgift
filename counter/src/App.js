import logo from './logo.svg';
import LoginComponent from './components/loginComponent';
import LoginImage from './components/loginImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <LoginComponent />
        <LoginImage />
      </div>
    </div>
  );
}

export default App;
