import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import PatientInfo from "./pages/PatientInfos";
import {Header} from "./components/header";
import { PatientInfoAdmin } from './components/admin/patientInfoCard';
import { PatientInsertAdmin } from './components/admin/patientInfoInsert';
import { PatientUpdateAdmin } from './components/admin/patientInfoUpdate';
import { PatientDeleteAdmin } from './components/admin/patientInfoDelete';
import { TraitementInsertAdmin } from './components/admin/traitementInfoInsert ';
import { TraitementUpdateAdmin } from './components/admin/traitementInfoUpdate';
import { TraitementDeleteAdmin } from './components/admin/traitementInfoDelete';
import { TraitementListAdmin } from './components/admin/traitementInfoList';
import { PhotosInsertAdmin } from './components/admin/photosInfoInsert';
import { PhotosUpdateAdmin } from './components/admin/photosInfoUpdate';
import { PhotosDeleteAdmin } from './components/admin/photosInfoDelete';
import { PhotosListAdmin } from './components/admin/photosInfoList';
import { PlaiesInsertAdmin } from './components/admin/plaiesInfoInsert';
import { PlaiesUpdateAdmin } from './components/admin/plaiesInfoUpdate';
import { PlaiesDeleteAdmin } from './components/admin/plaiesInfoDelete';
import { PlaiesListAdmin } from './components/admin/plaiesInfoList';
import { MedicInsertAdmin } from './components/admin/medicInfoInsert';
import { MedicUpdateAdmin } from './components/admin/medicInfoUpdate';
import { MedicDeleteAdmin } from './components/admin/medicInfoDelete';
import { MedicListAdmin } from './components/admin/medicInfoList';
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
  const [showModalPatientInfo, setShowModalPatientInfo] = useState(false);
  const handleShowModalPatientInfo = () => setShowModalPatientInfo(true);
  const handleCloseModalPatientInfo = () => setShowModalPatientInfo(false);
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
  const [photosInfo, setPhotosInfo] = useState([]);
  const [showModalPhotosInsert, setShowModalPhotosInsert] = useState(false);
  const handleShowModalPhotosInsert = () => setShowModalPhotosInsert(true);
  const handleCloseModalPhotosInsert = () => setShowModalPhotosInsert(false);
  const [showModalPhotosUpdate, setShowModalPhotosUpdate] = useState(false);
  const handleShowModalPhotosUpdate = () => setShowModalPhotosUpdate(true);
  const handleCloseModalPhotosUpdate = () => setShowModalPhotosUpdate(false);
  const [showModalPhotosDelete, setShowModalPhotosDelete] = useState(false);
  const handleShowModalPhotosDelete = () => setShowModalPhotosDelete(true);
  const handleCloseModalPhotosDelete = () => setShowModalPhotosDelete(false);
  const [showModalPhotosList, setShowModalPhotosList] = useState(false);
  const handleShowModalPhotosList = () => setShowModalPhotosList(true);
  const handleCloseModalPhotosList = () => setShowModalPhotosList(false);
  const [plaiesInfo, setPlaiesInfo] = useState([]);
  const [showModalPlaiesInsert, setShowModalPlaiesInsert] = useState(false);
  const handleShowModalPlaiesInsert = () => setShowModalPlaiesInsert(true);
  const handleCloseModalPlaiesInsert = () => setShowModalPlaiesInsert(false);
  const [showModalPlaiesUpdate, setShowModalPlaiesUpdate] = useState(false);
  const handleShowModalPlaiesUpdate = () => setShowModalPlaiesUpdate(true);
  const handleCloseModalPlaiesUpdate = () => setShowModalPlaiesUpdate(false);
  const [showModalPlaiesDelete, setShowModalPlaiesDelete] = useState(false);
  const handleShowModalPlaiesDelete = () => setShowModalPlaiesDelete(true);
  const handleCloseModalPlaiesDelete = () => setShowModalPlaiesDelete(false);
  const [showModalPlaiesList, setShowModalPlaiesList] = useState(false);
  const handleShowModalPlaiesList = () => setShowModalPlaiesList(true);
  const handleCloseModalPlaiesList = () => setShowModalPlaiesList(false);
  
  const [showModalMedicInsert, setShowModalMedicInsert] = useState(false);
  const handleShowModalMedicInsert = () => setShowModalMedicInsert(true);
  const handleCloseModalMedicInsert = () => setShowModalMedicInsert(false);
  const [showModalMedicUpdate, setShowModalMedicUpdate] = useState(false);
  const handleShowModalMedicUpdate = () => setShowModalMedicUpdate(true);
  const handleCloseModalMedicUpdate = () => setShowModalMedicUpdate(false);
  const [showModalMedicDelete, setShowModalMedicDelete] = useState(false);
  const handleShowModalMedicDelete = () => setShowModalMedicDelete(true);
  const handleCloseModalMedicDelete = () => setShowModalMedicDelete(false);
  const [showModalMedicList, setShowModalMedicList] = useState(false);
  const handleShowModalMedicList = () => setShowModalMedicList(true);
  const handleCloseModalMedicList = () => setShowModalMedicList(false);
  return <>
    <div className="App">
      <Router>
        <Header/>
        <PatientInfoAdmin handleShowModalTraitementList={handleShowModalTraitementList} handleShowModalPhotosList={handleShowModalPhotosList} handleShowModalPlaiesList={handleShowModalPlaiesList} handleShowModalMedicList={handleShowModalMedicList} setPatientInfo={setPatientInfo} patientInfo = {patientInfo} showModalPatientInfo={showModalPatientInfo} handleCloseModalPatientInfo={handleCloseModalPatientInfo} handleShowModalPatientUpdate={handleShowModalPatientUpdate} handleShowModalPatientDelete={handleShowModalPatientDelete}/>
        <PatientInsertAdmin showModalPatientInsert={showModalPatientInsert} handleCloseModalPatientInsert={handleCloseModalPatientInsert}/>
        <PatientUpdateAdmin patientInfo = {patientInfo} showModalPatientUpdate={showModalPatientUpdate} handleCloseModalPatientUpdate={handleCloseModalPatientUpdate}/>
        <PatientDeleteAdmin patientInfo = {patientInfo} showModalPatientDelete={showModalPatientDelete} handleCloseModalPatientDelete={handleCloseModalPatientDelete}/>
        <TraitementInsertAdmin patientInfo = {patientInfo} showModalTraitementInsert={showModalTraitementInsert} handleCloseModalTraitementInsert={handleCloseModalTraitementInsert}/>
        <TraitementUpdateAdmin traitementInfo = {traitementInfo} showModalTraitementUpdate={showModalTraitementUpdate} handleCloseModalTraitementUpdate={handleCloseModalTraitementUpdate}/>
        <TraitementDeleteAdmin traitementInfo = {traitementInfo} showModalTraitementDelete={showModalTraitementDelete} handleCloseModalTraitementDelete={handleCloseModalTraitementDelete}/>
        <TraitementListAdmin setTraitementInfo={setTraitementInfo} patientInfo = {patientInfo} showModalTraitementList={showModalTraitementList} handleCloseModalTraitementList={handleCloseModalTraitementList} handleShowModalTraitementInsert={handleShowModalTraitementInsert} handleShowModalTraitementUpdate={handleShowModalTraitementUpdate} handleShowModalTraitementDelete={handleShowModalTraitementDelete}/>
        <PhotosInsertAdmin patientInfo = {patientInfo} showModalPhotosInsert={showModalPhotosInsert} handleCloseModalPhotosInsert={handleCloseModalPhotosInsert}/>
        <PhotosUpdateAdmin photosInfo = {photosInfo} showModalPhotosUpdate={showModalPhotosUpdate} handleCloseModalPhotosUpdate={handleCloseModalPhotosUpdate}/>
        <PhotosDeleteAdmin photosInfo = {photosInfo} showModalPhotosDelete={showModalPhotosDelete} handleCloseModalPhotosDelete={handleCloseModalPhotosDelete}/>
        <PhotosListAdmin setPhotosInfo={setPhotosInfo} patientInfo = {patientInfo} showModalPhotosList={showModalPhotosList} handleCloseModalPhotosList={handleCloseModalPhotosList} handleShowModalPhotosInsert={handleShowModalPhotosInsert} handleShowModalPhotosUpdate={handleShowModalPhotosUpdate} handleShowModalPhotosDelete={handleShowModalPhotosDelete}/>
        <PlaiesInsertAdmin patientInfo = {patientInfo} showModalPlaiesInsert={showModalPlaiesInsert} handleCloseModalPlaiesInsert={handleCloseModalPlaiesInsert}/>
        <PlaiesUpdateAdmin plaiesInfo = {plaiesInfo} showModalPlaiesUpdate={showModalPlaiesUpdate} handleCloseModalPlaiesUpdate={handleCloseModalPlaiesUpdate}/>
        <PlaiesDeleteAdmin plaiesInfo = {plaiesInfo} showModalPlaiesDelete={showModalPlaiesDelete} handleCloseModalPlaiesDelete={handleCloseModalPlaiesDelete}/>
        <PlaiesListAdmin setPlaiesInfo={setPlaiesInfo} patientInfo = {patientInfo} showModalPlaiesList={showModalPlaiesList} handleCloseModalPlaiesList={handleCloseModalPlaiesList} handleShowModalPlaiesInsert={handleShowModalPlaiesInsert} handleShowModalPlaiesUpdate={handleShowModalPlaiesUpdate} handleShowModalPlaiesDelete={handleShowModalPlaiesDelete}/>
        <MedicInsertAdmin patientInfo = {patientInfo} showModalMedicInsert={showModalMedicInsert} handleCloseModalMedicInsert={handleCloseModalMedicInsert}/>
        <MedicUpdateAdmin plaiesInfo = {plaiesInfo} showModalMedicUpdate={showModalMedicUpdate} handleCloseModalMedicUpdate={handleCloseModalMedicUpdate}/>
        <MedicDeleteAdmin plaiesInfo = {plaiesInfo} showModalMedicDelete={showModalMedicDelete} handleCloseModalMedicDelete={handleCloseModalMedicDelete}/>
        <MedicListAdmin setPlaiesInfo={setPlaiesInfo} patientInfo = {patientInfo} showModalMedicList={showModalMedicList} handleCloseModalMedicList={handleCloseModalMedicList} handleShowModalMedicInsert={handleShowModalMedicInsert} handleShowModalMedicUpdate={handleShowModalMedicUpdate} handleShowModalMedicDelete={handleShowModalMedicDelete}/>
        <Routes>
          <Route exact path={link.homeFull} element={<Home/>} />
          <Route exact path={link.home} element={<Home/>} />
          <Route exact path={link.patients} element={<PatientInfo setPatientInfo={setPatientInfo} handleShowModalPatientInfo={handleShowModalPatientInfo} handleShowModalPatientInsert={handleShowModalPatientInsert} setTraitementInfo={setTraitementInfo} setPhotosInfo={setPhotosInfo} setPlaiesInfo={setPlaiesInfo}/>} />
          <Route exact path={link.planning} element={<Planning/>} />
        </Routes>
      </Router>
    </div>
    </>;  
}

export default App;
