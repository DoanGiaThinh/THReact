import logo from './logo.svg';
import './App.css';
import { HelloPersion, Hello} from './Hello';
import { Header } from './Header';
import HelloChaoXin from './Hellochaoxin';
import Car from './Car';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Header />
          <Hello />
          <HelloPersion name={'Đoàn Gia Thịnh'} />
          <HelloChaoXin name={'Thinh Dep Trai'}/>
          <Car />
          <Login />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
