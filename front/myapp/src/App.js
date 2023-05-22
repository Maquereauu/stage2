import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import PatientInfo from "./pages/PatientInfos";
import {Header} from "./components/header";
import { PatientInsertAdmin } from './components/admin/patientInfoInsert';
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
  const [showModalPatientInsert, setShowModalPatientInsert] = useState(false);
  const handleShowModalPatientInsert = () => setShowModalPatientInsert(true);
  const handleCloseModalPatientInsert = () => setShowModalPatientInsert(false);
  return <>
    <div className="App">
      <Router>
        <Header/>
        <PatientInsertAdmin showModalPatientInsert={showModalPatientInsert} handleCloseModalPatientInsert={handleCloseModalPatientInsert}/>
        <Routes>
          <Route exact path={link.homeFull} element={<Home/>} />
          <Route exact path={link.home} element={<Home/>} />
          <Route exact path={link.patients} element={<PatientInfo handleShowModalPatientInsert={handleShowModalPatientInsert}/>} >
          </Route>
        </Routes>
      </Router>
    </div>
    </>;
}

export default App;
