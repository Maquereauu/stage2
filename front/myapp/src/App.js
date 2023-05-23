import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import PatientInfo from "./pages/PatientInfos";
import {Header} from "./components/header";
import { PatientInsertAdmin } from './components/admin/patientInfoInsert';
import { PatientUpdateAdmin } from './components/admin/patientInfoUpdate';
import { PatientDeleteAdmin } from './components/admin/patientInfoDelete';
import { TraitementInsertAdmin } from './components/admin/traitementInfoInsert ';
import { TraitementUpdateAdmin } from './components/admin/traitementInfoUpdate';
import { TraitementDeleteAdmin } from './components/admin/traitementInfoDelete';
import { TraitementListAdmin } from './components/admin/traitementInfoList';
export function links() {
  return {
    homeFull: '/home',
    home: '/',
    patients : '/patients',
    planning : '/planning',
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
  const [traitementInfo, setTraitementInfo] = useState([]);
  const [showModalTraitementInsert, setShowModalTraitementInsert] = useState(false);
  const handleShowModalTraitementInsert = () => setShowModalTraitementInsert(true);
  const handleCloseModalTraitementInsert = () => setShowModalTraitementInsert(false);
  const [showModalTraitementUpdate, setShowModalTraitementUpdate] = useState(false);
  const handleShowModalTraitementUpdate = () => setShowModalTraitementUpdate(true);
  const handleCloseModalTraitementUpdate = () => setShowModalTraitementUpdate(false);
  const [showModalTraitementDelete, setShowModalTraitementDelete] = useState(false);
  const handleShowModalTraitementDelete = () => setShowModalTraitementDelete(true);
  const handleCloseModalTraitementDelete = () => setShowModalTraitementDelete(false);
  const [showModalTraitementList, setShowModalTraitementList] = useState(false);
  const handleShowModalTraitementList = () => setShowModalTraitementList(true);
  const handleCloseModalTraitementList = () => setShowModalTraitementList(false);
  return <>
    <div className="App">
      <Router>
        <Header/>
        <PatientInsertAdmin showModalPatientInsert={showModalPatientInsert} handleCloseModalPatientInsert={handleCloseModalPatientInsert}/>
        <PatientUpdateAdmin patientInfo = {patientInfo} showModalPatientUpdate={showModalPatientUpdate} handleCloseModalPatientUpdate={handleCloseModalPatientUpdate}/>
        <PatientDeleteAdmin patientInfo = {patientInfo} showModalPatientDelete={showModalPatientDelete} handleCloseModalPatientDelete={handleCloseModalPatientDelete}/>
        <TraitementInsertAdmin showModalTraitementInsert={showModalTraitementInsert} handleCloseModalTraitementInsert={handleCloseModalTraitementInsert}/>
        <TraitementUpdateAdmin traitementInfo = {traitementInfo} showModalTraitementUpdate={showModalTraitementUpdate} handleCloseModalTraitementUpdate={handleCloseModalTraitementUpdate}/>
        <TraitementDeleteAdmin traitementInfo = {traitementInfo} showModalTraitementDelete={showModalTraitementDelete} handleCloseModalTraitementDelete={handleCloseModalTraitementDelete}/>
        <TraitementListAdmin patientInfo = {patientInfo} showModalTraitementList={showModalTraitementList} handleCloseModalTraitementList={handleCloseModalTraitementList}/>
        <Routes>
          <Route exact path={link.homeFull} element={<Home/>} />
          <Route exact path={link.home} element={<Home/>} />
          <Route exact path={link.patients} element={<PatientInfo setPatientInfo={setPatientInfo} handleShowModalPatientInsert={handleShowModalPatientInsert} handleShowModalPatientUpdate={handleShowModalPatientUpdate} handleShowModalPatientDelete={handleShowModalPatientDelete} setTraitementInfo={setTraitementInfo} handleShowModalTraitementInsert={handleShowModalTraitementInsert} handleShowModalTraitementUpdate={handleShowModalTraitementUpdate} handleShowModalTraitementDelete={handleShowModalTraitementDelete} handleShowModalTraitementList={handleShowModalTraitementList}/>} />
          <Route exact path={link.planning} element={<Planning/>} />
        </Routes>
      </Router>
    </div>
    </>;
}

export default App;
