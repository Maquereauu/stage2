import { Patient_ } from "../components/patient/Get_patient";
import React, { useEffect, useState } from 'react'
import Collapse from '@mui/material/Collapse';
import { ReactSession } from 'react-client-session';
export default function PatientInfo(props){
    const [patient, setPatient] = useState([]);
    const [timer, setTimer] = useState();
    const [search, setSearch] = useState();
    const [patientsMap, setPatientsMap] = useState([]);
    const patientList = patient.sort((a, b) => a.nom.localeCompare(b.nom))
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
            if (val !== "") {
                setSearch(true)
                setPatientsMap(patientList.map((val2,index) => {
                    var verif = false
                    for (const key in val2) {
                        try {
                            if (key == "prenom" || key == "nom" ) {
                                verif = verif || val2[key].toString().toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(val.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                            }
                        } catch (err) { }
                    };
                    if (verif) {
                        return <div key={index} className="background-color-2-3 border">
                            <div className='flex box2'>
                                <p className='text align-center'>{val2.prenom}/</p>
                                <p className='text align-center'>{val2.nom}</p>
                                <div className='text align-center align-left' onClick={() => { props.handleShowModalPatientInfo();props.setPatientInfo(val2)}}>info patient</div>
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
    {ReactSession.get("username")?<><div className="flex center margin-top ">
        <input className="padding-right-left" type="submit" value="Ajouter un patient" onClick={() => { props.handleShowModalPatientInsert() }} />
    </div>
            <div className="background-color-2-4">
            <div className='center box2 margin-top'>
                <input type="text" placeholder="Rechercher" onChange={detectChange} defaultValue={() => {
                    try {
                        return ReactSession.get("searchbar")
                    } catch (err) {
                        return ""
                    }
                }} />
            </div>
            </div>
            <div className="">
            {search?patientsMap:patientList.map((patient,key)=>{
    return <div key={key} className="background-color-2-3 border">
    <div className='flex box2'>
        <p className='text align-center'>{patient.prenom}/</p>
        <p className='text align-center'>{patient.nom}</p>
        {ReactSession.get("patient"+patient.id)?<div>Notif non lue</div>:<></>}
        <div className='text align-center align-left' onClick={() => { props.handleShowModalPatientInfo();props.setPatientInfo(patient)}}>info patient</div>
    </div>
    </div>
    }
    )
}</div></>:<><p>Merci de bien vouloir vous connecter pour accéder aux services.</p></>}
</>
}