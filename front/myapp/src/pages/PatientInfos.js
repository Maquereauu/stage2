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
    <h1 className="title top stroke">Bienvenue sur les infos des patients.</h1>
    <div className="flex center margin-top ">
        <input className="padding-right-left" type="submit" value="Ajouter un patient" onClick={() => { props.handleShowModalPatientInsert() }} ></input>
    </div>
    <div className= "flex">
    {patient.map((patient,key)=>{
    return <div key={key} className="card">
        <p>{patient.nom}</p>
        <p>{patient.prenom}</p>
        <p>{patient.adresse}</p>
        <p>{patient.tel}</p>
        <p>{patient.medecin}</p>
        <p>{patient.tel_proche}</p>
    </div>
    }
    )
}
</div>
</>
}