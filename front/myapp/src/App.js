import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import PatientInfo from "./pages/PatientInfos";
import {Header} from "./components/header";
import { PatientInsertAdmin } from './components/admin/patientInfoInsert';
import { PatientUpdateAdmin } from './components/admin/patientInfoUpdate';
import { PatientDeleteAdmin } from './components/admin/patientInfoDelete';
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
  const [patientInfo, setPatientInfo] = useState([]);
  const [showModalPatientInsert, setShowModalPatientInsert] = useState(false);
  const handleShowModalPatientInsert = () => setShowModalPatientInsert(true);
  const handleCloseModalPatientInsert = () => setShowModalPatientInsert(false);
  const [showModalPatientUpdate, setShowModalPatientUpdate] = useState(false);
  const handleShowModalPatientUpdate = () => setShowModalPatientUpdate(true);
  const handleCloseModalPatientUpdate = () => setShowModalPatientUpdate(false);
  const [showModalPatientDelete, setShowModalPatientDelete] = useState(false);
  const handleShowModalPatientDelete = () => setShowModalPatientDelete(true);
  const handleCloseModalPatientDelete = () => setShowModalPatientDelete(false);
  return <>
    <div className="App">
      <Router>
        <Header/>
        <PatientInsertAdmin showModalPatientInsert={showModalPatientInsert} handleCloseModalPatientInsert={handleCloseModalPatientInsert}/>
        <PatientUpdateAdmin patientInfo = {patientInfo} showModalPatientUpdate={showModalPatientUpdate} handleCloseModalPatientUpdate={handleCloseModalPatientUpdate}/>
        <PatientDeleteAdmin patientInfo = {patientInfo} showModalPatientDelete={showModalPatientDelete} handleCloseModalPatientDelete={handleCloseModalPatientDelete}/>
        <Routes>
          <Route exact path={link.homeFull} element={<Home/>} />
          <Route exact path={link.home} element={<Home/>} />
          <Route exact path={link.patients} element={<PatientInfo setPatientInfo={setPatientInfo} handleShowModalPatientInsert={handleShowModalPatientInsert} handleShowModalPatientUpdate={handleShowModalPatientUpdate} handleShowModalPatientDelete={handleShowModalPatientDelete}/>} >
          </Route>
        </Routes>
      </Router>
    </div>
    </>;
}

export default App;
