import Modal from 'react-bootstrap/Modal';
import { Patient_ } from "../patient/Get_patient";
import React, { useEffect, useState } from 'react';
import { PatientUpdate } from "./patientUpdate"

export function PatientUpdateAdmin(props){
    return <Modal animation={true} show={props.showModalPatientUpdate} onHide={props.handleCloseModalPatientUpdate}>
    <Modal.Body>
        <PatientUpdate patientInfo={props.patientInfo}/>
    </Modal.Body>
    </Modal>}