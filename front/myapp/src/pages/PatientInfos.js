import { Patient_ } from "../components/patient/Get_patient";
import React, { useEffect, useState } from 'react'
export default function PatientInfo(props){
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        const PatientList = Patient_();
        PatientList
            .then(result => setPatient(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);
    return <>
    <h1 className="title top stroke box">Bienvenue sur les infos des patients.</h1>
    <div className="flex center margin-top ">
        <input className="padding-right-left" type="submit" value="Ajouter un patient" onClick={() => { props.handleShowModalPatientInsert() }} ></input>
    </div>
    {patient.map((patient,key)=>{
    return <div key={key} className="box2 margin-top" infos={patient}>
        <div onClick={()=>props.handleShowModalPatientDelete()&props.setPatientInfo(patient)}>test</div>
        <div>test</div>
        <div className="background-color-2-3" onClick={()=>props.handleShowModalPatientUpdate()&props.setPatientInfo(patient)}>
        <p>{patient.nom}</p>
        <p>{patient.prenom}</p>
        <p>{patient.adresse}</p>
        <p>{patient.tel}</p>
        <p>{patient.medecin}</p>
        <p>{patient.tel_proche}</p>
    </div>
    </div>
    }
    )
}
</>
}