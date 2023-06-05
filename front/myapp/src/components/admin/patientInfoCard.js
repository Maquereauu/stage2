import Modal from 'react-bootstrap/Modal';
import { Patient_ } from "../patient/Get_patient";
import React, { useEffect, useState } from 'react';
import { PatientInfo } from "./patientInfo"

export function PatientInfoAdmin(props){
    return <Modal animation={true} show={props.showModalPatientInfo} onHide={props.handleCloseModalPatientInfo}>
    <Modal.Body>
        <PatientInfo handleShowModalTraitementList={props.handleShowModalTraitementList} handleShowModalPhotosList={props.handleShowModalPhotosList} handleShowModalMedicList={props.handleShowModalMedicList} handleShowModalPlaiesList={props.handleShowModalPlaiesList} setPatientInfo={props.setPatientInfo} handleShowModalPatientUpdate={props.handleShowModalPatientUpdate} handleShowModalPatientDelete={props.handleShowModalPatientDelete} patientInfo={props.patientInfo}/>
    </Modal.Body>
    </Modal>}