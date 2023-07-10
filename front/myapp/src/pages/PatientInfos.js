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
                                {ReactSession.get("patient"+val2.id)?<><img className="notif" src={"./image/notification.png"} alt="notif" /></>:<></>}
                                <img src="./image/eye.png" className='align-left align-center eye-icon' onClick={() => { props.handleShowModalPatientInfo();props.setPatientInfo(val2)}}></img>
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
    {ReactSession.get("username")?<>
    <div className="box2 background-color-1-5 border"><div className="flex center ">
        <input className="padding-right-left" type="submit" value="Ajouter un patient" onClick={() => { props.handleShowModalPatientInsert() }} />
    </div>
    <div className="flex center margin-top ">
        <input className="padding-right-left" type="submit" value={"Mouvements patients"} onClick={() => { props.handleShowModalMoveList() }} />
        {ReactSession.get("movenotif")?<img className="notif" src={"./image/notification.png"} alt="notif" />:<></>}
    </div>
    </div>
    {ReactSession.get("notifpatient")?<div className="flex"><img className="notif" src={"./image/notification.png"} alt="notif" /><p className="margin-top----">Notif patient non lue</p></div>:<></>}
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
            <div className="margin-bottom">
            {search?patientsMap:patientList.map((patient,key)=>{
    return <div key={key} className="background-color-2-3 border">
    <div className='flex box2'>
        <p className='text align-center'>{patient.prenom}/</p>
        <p className='text align-center'>{patient.nom}</p>
        {ReactSession.get("patient"+patient.id)?<><img className="notif" src={"./image/notification.png"} alt="notif" /></>:<></>}
        <img src="./image/eye.png" className='align-left align-center eye-icon' onClick={() => { props.handleShowModalPatientInfo();props.setPatientInfo(patient)}}></img>
    </div>
    </div>
    }
    )
}</div></>:<><p>Merci de bien vouloir vous connecter pour accéder aux services.</p></>}
</>
}