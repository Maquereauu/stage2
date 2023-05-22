import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import PatientInfo from "./pages/PatientInfos";
import {Header} from "./components/header";
export function links() {
  return {
    homeFull: '/home',
    home: '/',
    patients : '/patients',
    err404: '*'
  }
}

function App() {
  const link = links()
  return <>
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path={link.homeFull} element={<Home/>} />
          <Route exact path={link.home} element={<Home/>} />
          <Route exact path={link.patients} element={<PatientInfo/>} />
        </Routes>
      </Router>
    </div>
    </>;
}

export default App;
