import Modal from 'react-bootstrap/Modal';
import { Patient_ } from "../patient/Get_patient";
import React, { useEffect, useState } from 'react';
import { PatientInfo } from "./patientInfo"

export function PatientInfoAdmin(props){
    return <Modal animation={true} show={props.showModalPatientInfo} onHide={props.handleCloseModalPatientInfo}>
        <div className=''>
         <img className="close-icon background-color-del" onClick={()=>props.handleCloseModalPatientInfo()} src={"./image/cross.png"} alt="close" />
        </div>
    <Modal.Body>
        <PatientInfo handleShowModalTraitementList={props.handleShowModalTraitementList} handleShowModalBilanList={props.handleShowModalBilanList} handleShowModalTransmissionList={props.handleShowModalTransmissionList} handleShowModalRdvList={props.handleShowModalRdvList} handleShowModalPhotosList={props.handleShowModalPhotosList} handleShowModalMedicList={props.handleShowModalMedicList} handleShowModalPlaiesList={props.handleShowModalPlaiesList} setPatientInfo={props.setPatientInfo} handleShowModalPatientUpdate={props.handleShowModalPatientUpdate} handleShowModalPatientDelete={props.handleShowModalPatientDelete} patientInfo={props.patientInfo}/>
    </Modal.Body>
    </Modal>}