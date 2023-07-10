import { ReactSession } from 'react-client-session';
export function PatientInfo(props) {
    return <div className="box2 margin-top">
        <div className="margin-bottom-- flex2 space-evenly">
        <img className="del-icon background-color-del radius" onClick={()=>props.handleShowModalPatientDelete()&props.setPatientInfo(props.patientInfo)} src={"./image/delete.png"} alt="delete" />
        <img className="del-icon background-color-edit radius" onClick={()=>props.handleShowModalPatientUpdate()&props.setPatientInfo(props.patientInfo)} src={"./image/edit.png"} alt="edit" />
        </div>
        <div className="background-color-2-3">
        <div className="margin-bottom--- flex2 space-evenly">
        <p className='bigger'>Nom: {props.patientInfo.nom}</p>
        <p className='bigger'>Prenom: {props.patientInfo.prenom}</p>
        </div>
        <div className="margin-bottom--- flex2 space-evenly">
        <p className='bigger'>Adresse: {props.patientInfo.adresse}</p>
        <p className='bigger'>Tel: {props.patientInfo.tel}</p>
        </div>
        <p className='bigger'>Medecin: {props.patientInfo.medecin}</p>
        <p className='bigger'>Tel proche: {props.patientInfo.tel_proche}</p>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalTraitementList()&props.setPatientInfo(props.patientInfo)}>Traitements {ReactSession.get("patient"+props.patientInfo.id+"traitement")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalPhotosList()&props.setPatientInfo(props.patientInfo)}>Ordonnances {ReactSession.get("patient"+props.patientInfo.id+"photo")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalPlaiesList()&props.setPatientInfo(props.patientInfo)}>Suivi de plaies {ReactSession.get("patient"+props.patientInfo.id+"plaies")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalMedicList()&props.setPatientInfo(props.patientInfo)}>Comptes rendus médicaux {ReactSession.get("patient"+props.patientInfo.id+"medic")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalBilanList()&props.setPatientInfo(props.patientInfo)}>Bilans/Soins {ReactSession.get("patient"+props.patientInfo.id+"bilan")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalRdvList()&props.setPatientInfo(props.patientInfo)}>Rdvs {ReactSession.get("patient"+props.patientInfo.id+"rdv")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        <div className="center bigger">
            <p onClick={()=>props.handleShowModalTransmissionList()&props.setPatientInfo(props.patientInfo)}>Transmissions {ReactSession.get("patient"+props.patientInfo.id+"transmission")?<img className="notif2" src={"./image/notification.png"} alt="notif" />:<></>}</p>
        </div>
        </div>
    </div>
}