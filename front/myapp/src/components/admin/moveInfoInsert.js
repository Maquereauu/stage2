import Modal from 'react-bootstrap/Modal';
import { Rdv_ } from "../rdv/Get_rdv";
import { Patient_ } from "../patient/Get_patient";
import React, { useEffect, useState } from 'react';
import { MoveInsert } from "./moveInsert"
export function MoveInsertAdmin(props){
    const [info,setInfo]=useState([]);
    const [info2,setInfo2]=useState([]);
    useEffect(() => {
        const list = Rdv_();
        list
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const list2 = Patient_();
        list2
            .then(result => setInfo2(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalMoveInsert} onHide={()=>{props.handleCloseModalMoveInsert();window.location.replace('/patients')}}>
    <Modal.Body>
        <MoveInsert patientInfo={props.patientInfo} info={info} info2={info2}/>
    </Modal.Body>
    </Modal>}