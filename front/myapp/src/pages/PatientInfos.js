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
        <div className="margin-bottom-- flex space-evenly">
        <div onClick={()=>props.handleShowModalPatientDelete()&props.setPatientInfo(patient)}>Supprimer</div>
        <div onClick={()=>props.handleShowModalPatientUpdate()&props.setPatientInfo(patient)}>Modifier</div>
        </div>
        <div className="background-color-2-3">
        <div className="margin-bottom--- flex space-evenly">
        <p>Nom: {patient.nom}</p>
        <p>Prenom: {patient.prenom}</p>
        </div>
        <div className="margin-bottom--- flex space-evenly">
        <p>Adresse: {patient.adresse}</p>
        <p>Tel: {patient.tel}</p>
        </div>
        <div className="margin-bottom--- flex space-evenly">
        <p>Medecin: {patient.medecin}</p>
        <p>Tel proche: {patient.tel_proche}</p>
        </div>
        <div className="center">
            <p onClick={()=>props.handleShowModalTraitementList()&props.setPatientInfo(patient)}>Traitements</p>
        </div>
        </div>
    </div>
    }
    )
}
</>
}