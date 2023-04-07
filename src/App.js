import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SplashHome } from './components/SplashHome';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SplashHome />
    </div>
  );
}

export default App;
