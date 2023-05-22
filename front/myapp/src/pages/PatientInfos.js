import { Patient_ } from "../components/patient/Get_patient";
import React, { useEffect, useState } from 'react'
export default function PatientInfo(){
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        const PatientList = Patient_();
        PatientList
            .then(result => setPatient(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);
    return <>
    <h1 className="title top stroke">Bienvenue sur les infos des patients.</h1>
    {patient.map((patient,key)=>{
    return <div key={key} className= "flex">
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
</>
}