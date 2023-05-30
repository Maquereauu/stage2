import { Patient_ } from "../components/patient/Get_patient";
import React, { useEffect, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import { ReactSession } from 'react-client-session';
export default function PatientInfo(props){
    const [patient, setPatient] = useState([]);
    const [timer, setTimer] = useState();
    const [search, setSearch] = useState();
    const [patientsMap, setPatientsMap] = useState([]);
    useEffect(() => {
        const PatientList = Patient_();
        PatientList
            .then(result => setPatient(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);
    function detectChange(e) {
        var val = e.target.value
        ReactSession.set("searchbar", val)
        if (val = "") {
            setSearch(false)
        }
        try { clearTimeout(timer) }
        catch (err) { }
        setTimer(setTimeout((res) => {
            var val = ReactSession.get("searchbar")
            if (val != "") {
                setSearch(true)
                setPatientsMap(patient.map((val2) => {
                    var verif = false
                    for (const key in val2) {
                        try {
                            if (key == "prenom" || key == "nom" ) {
                                verif = verif || val2[key].toString().toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(val.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                            }
                        } catch (err) { }
                    };
                    if (verif) {
                        return <div>
                            <div className='flex'>
                                <p className='text white align-center'>{val2.prenom}/</p>
                                <p className='text white align-center'>{val2.nom}</p>
                            </div>
                            </div>
                    }
                }))
            } else {
                setSearch(false)
            }
        }, 500))
    }
    return <>
    <h1 className="title top stroke box">Bienvenue sur les infos des patients.</h1>
    <div className="flex center margin-top ">
        <input className="padding-right-left" type="submit" value="Ajouter un patient" onClick={() => { props.handleShowModalPatientInsert() }} />
    </div>
            <div className='flex center margin-top--'>
                <input type="text" placeholder="search here" onChange={detectChange} defaultValue={() => {
                    try {
                        return ReactSession.get("searchbar")
                    } catch (err) {
                        return ""
                    }
                }} />
            </div>
            {search?patientsMap:patient.map((patient,key)=>{
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