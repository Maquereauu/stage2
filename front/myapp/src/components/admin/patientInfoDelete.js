import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { DeletePatient_ } from "../../components/AllPatient/Patient";
export function PatientDeleteAdmin(props){
    return <Modal animation={true} show={props.showModalPatientDelete} onHide={props.handleCloseModalPatientDelete}>
    <Modal.Body>
        <p>Êtes vous sur de vouloir supprimer le patient {props.patientInfo.nom} {props.patientInfo.prenom}</p>
        <Button variant="danger" onClick={()=>DeletePatient_(props.patientInfo)&window.location.replace('/patients')}>Supprimer</Button>
    </Modal.Body>
    </Modal>}