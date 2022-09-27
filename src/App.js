import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Home_01 from "./components/Home_01";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/guru_ideas">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home_01 />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
