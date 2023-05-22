import Modal from 'react-bootstrap/Modal';
import { Patient_ } from "../patient/Get_patient";
import React, { useEffect, useState } from 'react';
import { PatientInsert } from "./patientInsert"

export function PatientInsertAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const list = Patient_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalPatientInsert} onHide={props.handleCloseModalPatientInsert}>
    <Modal.Body>
        <PatientInsert info={info}/>
    </Modal.Body>
    </Modal>}